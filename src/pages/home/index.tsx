import {useState} from 'react';


const Home = () => {
    const [value, setValue] = useState<string>('');
    global.event$.useSubscription(val => {
        setValue(val)
    })
    return (
       <div>
           <div>这就是首页</div>
           {value}
       </div>
    );
};

export default Home;
