(() => {
    // 自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样。
    // symbol类型的值是通过Symbol构造函数创建的。
    let syml = Symbol();
    let syml2 = Symbol("JWnMing");
    let syml3 = Symbol("JWnMing");
    console.log(syml2 == syml3); // 不相等，是各自独立
    let syml4 = Symbol();
    let str;
    let obj = {
        [syml4]: "value",
        [str]: "str"
    };
    console.log(obj[syml4]);
    console.log(obj[str]);
    // 声明类和属性
    const getClassNameSymbol = Symbol();
    class C {
        [getClassNameSymbol]() {
            return "C";
        }
    }
    let cn = new C();
    console.log(cn[getClassNameSymbol]());
    // 以下为这些symbols的列表：
    Symbol.hasInstance;
    // 方法，会被instanceof运算符调用。构造器对象用来识别一个对象是否是其实例。
    Symbol.isConcatSpreadable;
    // 布尔值，表示当在一个对象上调用Array.prototype.concat时，这个对象的数组元素是否可展开。
    Symbol.iterator;
    // 方法，被for-of语句调用。返回对象的默认迭代器。
    Symbol.match;
    // 方法，被String.prototype.match调用。正则表达式用来匹配字符串。
    Symbol.replace;
    // 方法，被String.prototype.replace调用。正则表达式用来替换字符串中匹配的子串。
    Symbol.search;
    // 方法，被String.prototype.search调用。正则表达式返回被匹配部分在字符串中的索引。
    Symbol.species;
    // 函数值，为一个构造函数。用来创建派生对象。
    Symbol.split;
    // 方法，被String.prototype.split调用。正则表达式来用分割字符串。
    Symbol.toPrimitive;
    // 方法，被ToPrimitive抽象操作调用。把对象转换为相应的原始值。
    Symbol.toStringTag;
    // 方法，被内置方法Object.prototype.toString调用。返回创建对象时默认的字符串描述。
    Symbol.unscopables;
    // 对象，它自己拥有的属性会被with作用域排除在外。
})();
