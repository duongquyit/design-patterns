import parser from 'xml2json';
import { IConvertAdapter } from './interfaces/adapter.interface';

export class FormatAdapter implements IConvertAdapter {
  convertFromXMLToJSON(xml: any): JSON {
    return JSON.parse(parser.toJson(xml));
  }

  convertFromJSONToXML(json: JSON): any {
    return parser.toXml(JSON.stringify(json));
  }
}
