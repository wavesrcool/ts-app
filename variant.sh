#!/bin/bash

#node_modules/native-base/lib/typescript/components/primitives/Box/types.d.ts

# variant?: VariantType<"Box">;
gsed '/_text\?: ITextProps/a' types.d.ts
