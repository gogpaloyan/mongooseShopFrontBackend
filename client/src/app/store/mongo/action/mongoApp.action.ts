


export class getMongo{
    static readonly type = "[get mongo comments]"
}


export class onAddMongo{
    static readonly type = "[Add mongo comments]"
    constructor(public payload: any){}
}

export class onDeleteMongo{
    static readonly type = "[onDelete mongo comments]"
    constructor(public id: any){}
}