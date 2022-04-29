import { ClassDecorator } from "../Decorators/签名";
import 'reflect-metadata'
namespace GetPost {
    const PATH_METADATA = 'path'
    const METHOD_METADATA = 'method'
    const Controller = (path: string): ClassDecorator => target => Reflect.defineMetadata(PATH_METADATA, path, target)
    const mappingDecorator = (method: string) => (path: string): MethodDecorator => {
        return (target, key, descriptor) => {
            Reflect.defineMetadata(PATH_METADATA, path, descriptor.value!)
            Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value!)
        }
    }
    const Get = mappingDecorator('GET');
    const Post = mappingDecorator('POST');
    
    const isConstructor = (item: any) => item.constructor === Boolean
    const isFunction = (item: unknown) => typeof item === 'function'
    function mapRoute(instance: Object) {
        const prototype = Object.getPrototypeOf(instance);
        // 筛选出类的 methodName
        const methodsNames = Object.getOwnPropertyNames(prototype)
            .filter(item => !isConstructor(item) && isFunction(prototype[item]));
        return methodsNames.map(methodName => {
            const fn = prototype[methodName];
            // 取出定义的 metadata
            const route = Reflect.getMetadata(PATH_METADATA, fn);
            const method = Reflect.getMetadata(METHOD_METADATA, fn);
            return {
                route,
                method,
                fn,
                methodName
            }
        })
    };
}