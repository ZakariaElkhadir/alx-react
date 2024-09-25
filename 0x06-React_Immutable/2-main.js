import accessImmutableObject from './2-nested.js';

const testAccessImmutableObject = () => {
    const obj = {
        name: {
            first: "Guillaume",
            last: "Salva"
        }
    };
    const path = ['name', 'first'];
    const result = accessImmutableObject(obj, path);
    console.log(result); // Should print "Guillaume"
};

testAccessImmutableObject();