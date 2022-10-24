let creds = {
    userName: 0,
    password: 0
};

if(process.env.NODE_ENV === "test") {
    creds = {
        userName: 'terpilod@gmail.com',
        password: '1234321Password!'
    };
}
export {creds}