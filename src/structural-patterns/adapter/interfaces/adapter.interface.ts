export interface IConvertAdapter {
  convertFromXMLToJSON(xml: any): JSON;
  convertFromJSONToXML(json: JSON): any;
}
