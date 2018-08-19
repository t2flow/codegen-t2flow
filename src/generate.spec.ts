import generate from "./node-instruction-generator";
import { NodeType, DataType } from "./enums";


describe("generate", () => {
    it("genrates the right spec", () => {
      expect(generate({
        name: "tf.tensor",
        identifier: "n1",
        config: {},
        ports: {
          inputs:[],
          outputs: []
        }
      }, {
        "name": "tf.tensor",
        "type": NodeType.Function,
        "returnType": "tf.Tensor",
        "params": [
          {
            "name": "values",
            "type": DataType.TypedArray,
            "optional": false
          },
          { "name": "shape", "type": "(number[])", "optional": true },
          {
            "name": "dtype",
            "type": "('float32'|'int32'|'bool')",
            "optional": true
          }
        ]
      })).toEqual("const n1_out = tf.tensor(test)")
    })
})