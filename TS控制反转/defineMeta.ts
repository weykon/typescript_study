import 'reflect-metadata'
namespace defineMeta {
    const GIVE_DESCRIPTION = 'give_description'
    const give_description = (desc: string) => (target: any, key: string, descriptor: any) => {
        console.log(target, key, descriptor)
        Reflect.defineMetadata(GIVE_DESCRIPTION, desc, target,key)
        return descriptor;
    }
    class THISASUPERMAN {
        @give_description('这是超人所以他的函数要有这段话')
        sayMyName() { console.log(`I'm killer machine`); return 1 }
    }
    const superMan = new THISASUPERMAN()
    const get = Reflect.getMetadata(GIVE_DESCRIPTION, superMan, 'sayMyName')
    console.log(get)
}