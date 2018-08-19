
import { NodeType } from "../enums";

interface IParamDef {
  name: string,
  type: string,
  optional: boolean
}

interface INodeDef {
  name: string,
  type: NodeType,
  returnType: string,
  params: Array<IParamDef>
}

export {
  INodeDef,
  IParamDef
}
