const Dashboard = () => {
    return (
        <>
            <div id="landing">
                <div id="landing-text">
                    <div id="landing-text-inner">
                        <h1>Ivan Photography</h1>
                        <h2>Landscape Photography</h2>
                        <a href="#images" className="btn" id="view-work">
                            View Work
                        </a>
                    </div>
                </div>
                <div id="landing-image"></div>
            </div>
            <div id="images">
                <div id="header">
                    <h2>My Work</h2>
                </div>

                <img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                <div className="caption">
                    <h3>Photo One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
                </div>
                <img src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div className="caption">
                    <h3>Photo Three</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
                </div>
                <img src="https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div className="caption">
                    <h3>Photo Four</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
                </div>
                <img src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div className="caption">
                    <h3>Photo Two</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
                </div>
                <img src="https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <div className="caption">
                    <h3>Photo Five</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur.</p>
                </div>
            </div>
        </>
    );
};

export default Dashboard;