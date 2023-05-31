

export type ProductType={
    id:number,
    category:string,
    price:number,
    qdt:number,
    name:string,
    marca:string,
    image:string,
    images:[] | string[]
}

export type userType={
    id:number,
    name:string,
    password:string,
    email:string,
    photo?:string,
    phone:string
}