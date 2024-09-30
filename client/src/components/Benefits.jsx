const Benefits =  () => {
    return (
        <section class="section-component">
            <h2>Benefits for Everyone</h2>
            <div className="benefit-lists">
                <div className="benefit-list">
                    <div className="benefit-img-div">
                        <img src="logo512.png" alt="Developers" className="benefit-img"/>
                    </div>
                    <div className="benefit-content">
                        <span><b>Developers:</b> 
                            Code with ease using natural language interaction. Imagine translating complex programming concepts into simple voice commands. Gen-X understands your intent and translates it into the appropriate code, allowing you to focus on the logic and functionality of your program. This intuitive approach streamlines development workflows, saving time and reducing the cognitive load associated with traditional coding methods.
                        </span>
                    </div>
                </div>
                <div className="benefit-list">
                    <div className="benefit-img-div">
                        <img src="logo512.png" alt="System Admin" className="benefit-img"/>
                    </div>
                    <div className="benefit-content">
                        <span><b>System Admins:</b>   
                            Manage complex networks with voice control. Imagine issuing commands like "restart server two" or "diagnose network latency on subnet 192.168.1.0/24" to automate routine tasks and troubleshoot network issues. Gen-X eliminates the need to navigate through intricate menus and interface configurations, saving valuable time and reducing the risk of human error. This voice-controlled approach allows system admins to maintain efficient network operations and respond to critical situations in a timely manner.
                        </span>
                    </div>
                </div>
                <div className="benefit-list">
                    <div className="benefit-img-div">
                        <img src="logo512.png" alt="Casual user" className="benefit-img"/>
                    </div>
                    <div className="benefit-content">
                        <span><b>Casual Users:</b>
                            Bridge the technology gap with intuitive AI assistance.  Gen-X empowers users of all technical backgrounds to navigate their computers with confidence. Whether you're new to computers or simply find traditional interfaces overwhelming, Gen-X offers a user-friendly voice interface that removes the need for technical knowledge. Ask Gen-X to open specific applications, search for information online, or complete basic tasks, all through natural language. This seamless interaction empowers everyone to utilize the full potential of their computers and participate in the digital world.
                        </span>
                    </div>
                </div>
            </div>
        </section>


    )
}


export default Benefits;