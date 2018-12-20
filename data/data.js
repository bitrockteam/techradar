
import devops from './devops.json';
import ui from './ui.json';
import eng from './engineering.json';
import methods from './methods.json';

const merge = [].concat(devops, ui, eng, methods);

const adopt = merge.filter(e => e.ring === 'adopt');
const trial = merge.filter(e => e.ring === 'trial');
const assess = merge.filter(e => e.ring === 'assess');
const hold = merge.filter(e => e.ring === 'hold');

export const data = [].concat(adopt, trial, assess, hold);