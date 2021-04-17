import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as fs from 'fs';

const YAML_CONFIG_FILENAME = 'config';
const environment = process.env.NODE_ENV || 'local';
export default () => {
  return yaml.load(
    fs.readFileSync(
      join(__dirname, YAML_CONFIG_FILENAME + '-' + environment + '.yml'),
      'utf8',
    ),
  ) as Record<string, any>;
};
