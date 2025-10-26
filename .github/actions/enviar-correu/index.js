const nodemailer = require('nodemailer');

async function run() {
    try {
        const correu = process.argv[2];
        const workflow = process.argv[3];
        const linter = process.argv[4];
        const cypress = process.argv[5];
        const badge = process.argv[6];
        const deploy = process.argv[7];

        const messageBody = `
            S'ha realitzat un push en la branca main que ha provocat l'execució del workflow ${workflow} amb els següents resultats:

            - linter_job: ${linter}
            - cypress_job: ${cypress}
            - add_badge_job: ${badge}
            - deploy_job: ${deploy}
            `;

        const crear_correu = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: correu,
                pass: process.env.CORREU_PASS
            }
        });

        await crear_correu.sendMail({
            from: `"GitHub Actions" <${correu}>`,
            to: correu,
            subject: `Resultat del workflow ${workflow}`,
            text: messageBody
        });
        console.log('Correu enviat correctament!');
    } catch (error) {
        process.exit(1);
    }
}

run()