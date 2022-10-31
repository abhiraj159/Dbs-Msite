import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../App.css';
import { useNavigate } from "react-router-dom"
import { DbsBody } from './DbsBody';

export const Dbs = () => {
    const navigate = useNavigate();
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="stickyTopBar">
                                <div className="main-blue-box">
                                    <div className="back-buttonsvg">
                                    </div>
                                    <h2 className="white-color text-center flexauto blue-bar-title">Diwali Billionaire Series</h2>
                                </div>
                            </div>
                            <DbsBody />

                        </div>

                    </div>
                </div>
                <footer className='footer'>
                    <ul className="nav nav-tabs f-ul" id="myTab" role="tablist">
                        <li role="presentation">
                            <button class="btn active" id="info-tab" data-bs-toggle="tab" data-bs-target="#info-tab-pane" type="button" role="tab" aria-controls="info-tab-pane" aria-selected="true">
                                <img className='img-fluid' src='./dbs/Info-icon.svg' /><br />
                                Info
                            </button>
                        </li>
                        <li role="presentation">
                            <button className='btn' id="diwali-rewards-tab" data-bs-toggle="tab" data-bs-target="#diwali-rewards-tab-pane" type="button" role="tab" aria-controls="diwali-rewards-tab-pane" aria-selected="true">
                                <img className='img-fluid' src='./dbs/Rewards.svg' /> <br />Diwali Rewards
                            </button>
                        </li>
                        <li role="presentation">
                            <button className='btn' id="milestone-challenges-tab" data-bs-toggle="tab" data-bs-target="#milestone-challenges-tab-pane" type="button" role="tab" aria-controls="milestone-challenges-tab-pane" aria-selected="false">
                                <img className='img-fluid' src='./dbs/Challenges-icon.svg' /> <br />Milestone Challenges
                            </button>
                        </li>
                        <li role="presentation">
                            <button className='btn' id="milestone-leaderboard-tab" data-bs-toggle="tab" data-bs-target="#milestone-leaderboard-tab-pane" type="button" role="tab" aria-controls="milestone-leaderboard-tab-pane" aria-selected="false">
                                <img className='img-fluid' src='./dbs/Leaderboard-icon.svg' /> <br />Milestone Leaderboard
                            </button>
                        </li>
                    </ul>
                </footer>
            </section>
        </>
    )
}
