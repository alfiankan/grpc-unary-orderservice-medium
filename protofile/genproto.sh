mkdir -p ../build/$1
mkdir -p ../$1
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:../build/$1 \
    --grpc_out=../build/$1 \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    $2

# generate d.ts codes
protoc \
    --plugin=protoc-gen-ts=../node_modules/.bin/protoc-gen-ts \
    --ts_out=../$1 \
    $2