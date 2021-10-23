import "promise-prototype-finally";
import {useEventEmitter} from 'ahooks';

const App = (props) => {
    /**
     * https://ahooks.gitee.io/zh-CN/hooks/advanced/use-event-emitter
     */
    global.event$ = useEventEmitter();
    return props.children;
};

export default App;
