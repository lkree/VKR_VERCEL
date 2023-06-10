import * as fs from 'fs';
import _ from 'lodash';
import { CONFIG_PATH } from '../../shared/const/index.js';
import { computeDirName, loadJSON } from '../../shared/lib/helpers/index.js';
export const loadConfig = () => loadJSON(CONFIG_PATH);
export const saveConfig = (config, cb = _.noop) => fs.writeFile(computeDirName(CONFIG_PATH), JSON.stringify(config, null, 2), {}, cb);
