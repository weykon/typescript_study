import 'reflect-metadata';
// 类型元数据使用元数据键"design:type"
// 参数类型元数据使用元数据键"design:paramtypes"
// 返回值类型元数据使用元数据键"design:returntype"
namespace Injectable {
    const Injectable = (): ClassDecorator => target => { }

    @Injectable()
    class Skin { name!: string }

    const provider = Reflect.getMetadata('design:paramtypes',new Skin);
    console.log(new Skin)
}