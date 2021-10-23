const Personal = () => {
    const handleClick = () => {
        global.eventEmitter.emit('hello word')
    }
    return (
        <div>
            个人中心
            <button onClick={handleClick}>发送推送</button>
        </div>
    );
};

export default Personal;