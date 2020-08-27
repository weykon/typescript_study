namespace oneTaste {
    const m_name: string = 'lucy';
    console.log(m_name)

    class mRole { Action() { } }
    class mHuman extends mRole { Action() { 1; } }
    class mMonster extends mRole { Action() { '2'; } }

    type select = mHuman | mMonster
    function getAction(node: any) {
        return node.Action
    }

    type inputT<T> =
        T extends mHuman ? 'yyy' :
        T extends mMonster ? 'hhhh' :
        'sorry';

    function genraicityGetAction<T extends mRole, inputT>(_type: T, nOrS: inputT) {
        console.log(nOrS);
        // return _type.Action
    }

    let a = new mHuman()
    let aAction = getAction(a)

    let b = new mMonster()
    let bAction = genraicityGetAction<mHuman, mHuman>(b, b)

    console.log('done')
}
