import Database from './util/i18n';

export const DEFAULT_APP_NAME = 'xcube Viewer';
export const DEFAULT_API_SERVER_URL = 'http://localhost:8080/xcube/api/0.1.0.dev6';

export const I18N = new Database();

I18N.locale = "se";

I18N.set('en')`Dataset`
    .add('de')`Datensatz`
    .add('se')`Uppgifter`;

I18N.set('en')`Variable`
    .add('de')`Variable`
    .add('se')`Variabel`;

I18N.set('en')`Places`
    .add('de')`Orte`
    .add('se')`Platser`;

I18N.set('en')`Place`
    .add('de')`Ort`
    .add('se')`Plats`;

I18N.set('en')`Time`
    .add('de')`Zeit`
    .add('se')`Tid`;

I18N.set('en')`Multi`
    .add('de')`Multi`
    .add('se')`Multi`;

I18N.set('en')`Something went wrong.`
    .add('de')`Irgendetwas lief schief.`
    .add('se')`Något gick fel.`;

I18N.set('en')`Time-Series`
    .add('de')`Zeitserie`
    .add('se')`Tidsserier`;

I18N.set('en')`Values`
    .add('de')`Werte`
    .add('se')`Värden`;
