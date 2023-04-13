import React, { useEffect, useContext } from 'react';
import { themeContext } from "../../../Context";
import $ from 'jquery';
import './Hobbies.css';
import Photo from '../../img/hobby/photo.jpg';
import Food from '../../img/hobby/Food.jpg';
import Adventurous from '../../img/hobby/Adventurous.jpg';
import Music from '../../img/hobby/Music.jpg';
import Code from '../../img/hobby/Code.jpg';
import Drawing from '../../img/hobby/Drawing.jpg';

function Hobbies() {
    useEffect(() => {
        $(".option").on("click", function () {
            $(".option").removeClass("active");
            $(this).addClass("active");
        });
    }, [])

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="Hobby" id="Hobby">
            <h4 className='hobbyHead' style={{ color: darkMode ? 'white' : '' }}>Hobbies</h4>

            <div className="options">
                <div className="option" style={{ backgroundImage: `url(${Photo})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-camera-retro"></i>
                        </div>
                        <div className="info">
                            <div className="main">Photography</div>
                            <div className="sub">Photography allows me to capture beautiful moments and memories in a tangible way.</div>
                        </div>
                    </div>
                </div>
                <div className="option" style={{ backgroundImage: `url(${Food})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fa fa-cutlery"></i>
                        </div>
                        <div className="info">
                            <div className="main">Foody</div>
                            <div className="sub">Trying new foods or flavors excits me, and I love sharing it with others.</div>
                        </div>
                    </div>
                </div>
                <div className="option" style={{ backgroundImage: `url(${Adventurous})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-tree"></i>
                        </div>
                        <div className="info">
                            <div className="main">Adventurous sports</div>
                            <div className="sub">I love engaging in adventurous sports like parasailing, surfing, skydiving. It's very thrilling.</div>
                        </div>
                    </div>
                </div>
                <div className="option" style={{ backgroundImage: `url(${Music})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-music"></i>
                        </div>
                        <div className="info">
                            <div className="main">Listening to music</div>
                            <div className="sub">Music can be a source of emotional release, relaxation, or inspiration. You just connect to certain songs or artists.</div>
                        </div>
                    </div>
                </div>
                <div className="option" style={{ backgroundImage: `url(${Code})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="info">
                            <div className="main">Coding</div>
                            <div className="sub">Coding pushes you outside of your comfort zone. You are always learning and challenging yourself, with non-repeating tasks.</div>
                        </div>
                    </div>
                </div>
                <div className="option active" style={{ backgroundImage: `url(${Drawing})` }}>
                    <div className="shadow"></div>
                    <div className="label">
                        <div className="icon">
                            <i className="fas fa-paint-brush"></i>
                        </div>
                        <div className="info">
                            <div className="main">Drawing</div>
                            <div className="sub">Drawing is a creative activity in which you often put down your emotions on a piece of paper. It’s like a healing process</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies