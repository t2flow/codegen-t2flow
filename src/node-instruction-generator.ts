import { INodeDef } from "./interfaces/NodeDefinitions";
import { DataType } from "./enums";

interface INode {
  name: string,
  identifier: string,
  config: object,
  ports: {
    inputs: Array<string>,
    outputs: Array<string>
  }
}

interface IEdge {
  name: string,
  from: {
    port: string,
    identifier: string
  },
  to:{
    port: string,
    identifier: string
  },
  type: DataType // type of the outflowing data
}

function generateConstIdentifier(identifierName: string) {
  return `const ${identifierName}_out =`;
}

function generateParamsName() {
  return "test"
}

function generate(
  node: INode, 
  def: INodeDef, 
  // outEdges: Array<IEdge>, 
  // inputEdges: Array<IEdge>
  ): string {
  return generateConstIdentifier(node.identifier).concat(` ${node.name}(${generateParamsName()})`);
}

export default generate;
export {
  INode,
  IEdge
}