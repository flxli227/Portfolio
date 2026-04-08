import React from 'react';
import {Link} from "react-router-dom";
import Video from './../components/video/Video'
import YouTube from './../components/youTube/YouTube.js'
import ImageGallery from 'react-image-gallery';

class KabaddiMobileGame extends React.Component {
    render(){
        return (
            <>
                <h2>What is it?</h2>
                <p>
                    The Kabaddi mobile game is the project I am currently working on. It is an online sports game for mobile of the sport Kabaddi.
                </p>
                <YouTube id="O1k5b8zZqAI"/>
                {/* <Video 
                    lazyLoad={true} 
                    path={require("./../assets/Kabaddi Mobile Game/KabaddiGameIntro-ezgif.com-resize-video.mp4")}
                /> */}

                <h2>What is Kabaddi?</h2>
                <p>Kabaddi is a traditional Indian game, and here are the basic rules:</p>
                <ul>
                    <li>There are two teams of seven players.</li>
                    <li>In each play (known as a raid), one team raids (attacks) and the other defends.</li>
                    <li>In each raid, a raider enters the opposing half of the court to tag (touch) the defenders and attempt to return to their own half court, within 30 seconds, without being tackled.</li>
                    <li>Points are awarded for successful tags, while defenders earn a point for tackling the raider.</li>
                    <li>When there are 6 or 7 defenders, the raider can also cross a line deep into the opponent's half, (Bonus line,) to get a point.</li>
                    <li>Raids alternate between teams throughout the game.</li>
                    <li>If you are touched as a defender and the raider crosses the half way line, or get tackled as a raider, you are out of the game until you are revived.</li>
                </ul>
                <p>
                    Think “British Bulldog”, but the raider has to touch someone on the opposite team and get back to their own half.
                    <br/><br/>
                    Here’s a video of the game so you get the idea.
                </p>
                <YouTube id="o2hs1k-ooEk"/>

                <h2>My experience with Kabaddi</h2>
                <p>
                    The reason I’m inspired to work on this project is because I’ve played the sport professionally in India. (Try and find me in the YouTube video above!)
                    <br/><br/>
                    I’ve also played for England in multiple international matches in Bangladesh, Poland and Kenya and also won a silver medal at the Paddy Power Kabaddi World Cup 2025. Competed in and won the British Kabaddi League, which is broadcast by BBC Sport, twice.
                </p>
                <ImageGallery
                    lazyLoad={true}
                    items={[
                        {
                            original: require("./../assets/Kabaddi Mobile Game/Training.jpg"),
                            thumbnail: require("./../assets/Kabaddi Mobile Game/Training.jpg"),
                        },
                        { 
                            original: require("./../assets/Kabaddi Mobile Game/World Cup.jpg"),
                            thumbnail: require("./../assets/Kabaddi Mobile Game/World Cup.jpg"),
                        },
                        { 
                            original: require("./../assets/Kabaddi Mobile Game/Medal.webp"),
                            thumbnail: require("./../assets/Kabaddi Mobile Game/Medal.webp"),
                        },
                        { 
                            original: require("./../assets/Kabaddi Mobile Game/Bangladesh.jpg"),
                            thumbnail: require("./../assets/Kabaddi Mobile Game/Bangladesh.jpg"),
                        },
                        { 
                            original: require("./../assets/Kabaddi Mobile Game/European Champ.jfif"),
                            thumbnail: require("./../assets/Kabaddi Mobile Game/European Champ.jfif"),
                        },
                        { 
                            original: require("./../assets/Kabaddi Mobile Game/BKL.webp"),
                            thumbnail: require("./../assets/Kabaddi Mobile Game/BKL.webp"),
                        },
                        { 
                            original: require("./../assets/Kabaddi Mobile Game/North.jpg"),
                            thumbnail: require("./../assets/Kabaddi Mobile Game/North.jpg"),
                        },
                    ]}
                />
                <h2>The game's progress</h2>
                <p>
                    The game is still in active development.
                    <br/><br/>
                    This is the initial prototype where I coded the core gameplay including:
                </p>
                <h4>Defence moving in formation</h4>
                <Video path={require("./../assets/Kabaddi Mobile Game/MovementClip-ezgif.com-video-cutter.mp4")}/>
                <h4>Defence making a tackle</h4>
                <Video path={require("./../assets/Kabaddi Mobile Game/Tackle-ezgif.com-video-cutter.mp4")}/>
                <h4>Raider making a touch</h4>
                <Video path={require("./../assets/Kabaddi Mobile Game/Touch-ezgif.com-video-cutter.mp4")}/>
                <p>The game should be playable, play by play, at the end of this phase, although low fidelity.</p>
                
                <h3>Adding animations</h3>
                <p>
                    I am currently in this phase of production.
                    <br/><br/>
                    This is where I upgraded the players from blobs to human shapes and added actions the players can do with their limbs.
                </p>  
                <h4>Hand touch</h4> 
                <Video path={require("./../assets/Kabaddi Mobile Game/Reach-ezgif.com-video-cutter.mp4")}/>
                <h4>Crossing the bonus line</h4>
                <Video path={require("./../assets/Kabaddi Mobile Game/Bonus-ezgif.com-video-cutter.mp4")}/>
                <p>
                    By the end of this phase, I should be able to play a match with a friend without interruptions. 
                </p>
                <h2>Next steps</h2>
                <p>Once the previous step is complete, I will:</p>
                <ul>
                    <li>Decide on art direction</li>
                    <li>Add online multiplayer</li>
                    <li>Port to mobile</li>
                    <li>Make a demo</li>
                    <li>Add other features to the game, such as career mode, etc.</li>
                </ul>
                <p>That’s all I have for now. If you are looking to see a completed game, check out my other game, <Link to="/project/pool-2">Pool 2</Link>!</p>
            </>
        )
    }
}

export default KabaddiMobileGame