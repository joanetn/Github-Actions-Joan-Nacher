const core = require('@actions/core');
const nodemailer = require('nodemailer');

async function run() {
    try {
        const correu = core.getInput('correu');
        const workflow = core.getInput('workflow');
        const linter = core.getInput('linter_job');
        const cypress = core.getInput('cypress_job');
        const badge = core.getInput('add_badge_job');
        const deploy = core.getInput('deploy_job');

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
        core.setFailed(`Error enviant el correu: ${error.message}`);
    }
}

run()