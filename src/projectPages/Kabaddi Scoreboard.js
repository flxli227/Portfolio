import React from 'react';
import MultiColumn from './../components/multiColumn/MultiColumn'
import Video from './../components/video/Video'
import ImageGallery from 'react-image-gallery'

class KabaddiMobileGame extends React.Component {
    render(){
        return (
            <>
                <h2>What is it?</h2>
                <p>
                    It is an app that helps Kabaddi referees keep track of the score, time, and other things during a Kabaddi game.
                    <br/><br/>
                    Check it out on the <a href="https://play.google.com/store/apps/details?id=com.flxli227.kabaddi_score_board" target="_blank" rel="noreferrer">Google Play Store</a>! (App Store coming soon.)
                    <br/><br/>
                    For support, feedback and feature requests please <a href="mailto:flxli227@gmail.com" target="_blank" rel="noreferrer">email me</a>.
                </p>
                <h2>The problem</h2>
                <p>Right now, in big Kabaddi tournaments, they have a team of referees and match officials to keep track of everything.</p>
                <p>They have powerful software like <a href="https://scoreboard.kabaddi.eu/" target="_blank" rel="noreferrer">this</a>:</p>
                <img 
                    src={require("./../assets/Kabaddi Scoreboard/Complex Kabaddi Scoreboard 1 min.png")}
                    alt="An alternative powerful scoreboard web app made by Juvraj Singh"
                />
                <p>This is really great but...</p>
                <h3>My use case</h3>
                <p>My app focuses on the use case where there is only one referee present, where the referee acts as the scorekeeper. 
                    <br/><br/>
                    This could be in smaller tournaments or practice matches in training, where there is only the need to keep track of the stuff that enables the game to run and not additional stuff like individual player statistics.
                </p>
                <h3>Things to track in a game</h3>
                <p>In a Kabaddi game, there are 4 things to keep track of:</p>                
                <ul>  
                    <li>
                        <strong>Game time:</strong> <br/>How much time is left in the game<br/><br/>
                    </li>
                    <li>
                        <strong>Raid time:</strong> <br/>How much time is left in this current play<br/><br/>
                    </li>
                    <li>
                        <strong>Scores:</strong> <br/>How many points each team has scored<br/><br/>
                    </li>
                    <li>
                        <strong>Empty raids:</strong> <br/>How many consecutive plays has a team not scored a point<br/><br/>
                    </li>
                </ul>
                <p>Before my app, two referees were needed to keep track of this:</p>
                <MultiColumn 
                    columns = {[
                        {
                            image: {
                                url: require("./../assets/Kabaddi Scoreboard/Stopwatch.png"),
                                alt: "Stopwatch"
                            },
                            title: "Referee 1 tracks:",
                            body:
                                <ul>
                                    <li>Game time using a stopwatch</li> 
                                    <li>Raid time using the lap function</li>
                                </ul>
                            // "Tracks game time using a stopwatch, tracks raid time using the lap function"
                        },
                        {
                            image: {
                            url: require("./../assets/Kabaddi Scoreboard/Generic Scoreboard.png"),
                                alt: "Generic Scoarboard app"
                            },
                            title: "Referee 2 tracks:",
                            body:
                                <ul>
                                    <li>Score using a generic scoreboard app</li> 
                                    <li>Empty raids in their head</li>
                                </ul>
                        },
                    ]}
                />
                <h2>My solution</h2>
                <p>An app that is simple to use, where a single referee can keep track of everything.</p>
                <ImageGallery
                    // lazyLoad={true}
                    items={[
                        {
                            original: require("./../assets/Kabaddi Scoreboard/Screenshots min.png"),
                            thumbnail: require("./../assets/Kabaddi Scoreboard/Screenshots min.png"),
                        },
                        {
                            original: require("./../assets/Kabaddi Scoreboard/Features 2 min.png"),
                            thumbnail: require("./../assets/Kabaddi Scoreboard/Features 2 min.png"),
                        },
                    ]}
                />
                <h3>Video demo</h3>
                <p>Here it is in a match situation!</p>
                <Video 
                    // lazyLoad={true} 
                    path={require("./../assets/Kabaddi Scoreboard/Scoreboarddemoshort-compressed.mp4")}
                />
                <h2>Testing and reception</h2>
                <p>The app is well-received and used in tournaments and training matches.</p>
                <MultiColumn 
                    columns = {[
                        {
                            image: {
                                url: require("./../assets/Kabaddi Scoreboard/Feedback.png"),
                                alt: "Feedback from WhatsApp about the app"
                            },
                        },
                        {
                            image: {
                                url: require("./../assets/Kabaddi Scoreboard/Feedback 2.png"),
                                alt: "More feedback from WhatsApp about the app"
                            },
                        },
                    ]}
                />
                <h2>Evolution</h2>
                <p>While making the app, I saw another opportunity. Players and spectators want to know the current state of the game, so I made a web build that could be projected so everyone can see the score and more.</p>
                <img
                    src={require("./../assets/Kabaddi Scoreboard/Testing_1920x1004.png")}
                    alt="The scoreboard web build being used in a tournament"
                />
                <p>(I’ve decided to not rely on a solution where the referee controls the scoreboard on their phone, and it gets cast on the big screen. This is because not every Kabaddi venue has good wifi reception, and to make it safe, I wanted to keep the solution offline for now.)</p>
                <h2>Conclusion</h2>
                <p>I am pleased I made an app which solves a real problem, and it is widely used in trainings and tournaments.</p>
            </>
        )
    }
}

export default KabaddiMobileGame