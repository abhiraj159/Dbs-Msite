import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export const DbsBody = () => {
    return (
        <>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="info-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">
                    <div className=''>
                        <img src="./dbs/1_Prize_Distribution.jpg" alt="" className="img-fluid w-100 h-auto rounded-0 bannerBorderRadius" />
                    </div>
                    <div className='pt-3'>
                        <img src="./dbs/2_Daily-Leaderboard_Coming-Soon.jpg" alt="" className="img-fluid w-100 h-auto bannerBorderRadius" />
                    </div>
                    <div className="pt-3">
                        <h1 className='text-yellow'>GET YOUR <br /><span className='text-white small-text'>Diwali Rewards Faster</span></h1>
                    </div>
                    <div className='pt-3'>
                        <img src="./dbs/3_Diwali-Rewards-v2.png" alt="" className="img-fluid w-100 h-auto bannerBorderRadius" />
                    </div>
                    <div className='pt-3'>
                        <img src="./dbs/4_Milestone-2709.jpg" alt="" className="img-fluid w-100 h-auto bannerBorderRadius" />
                    </div>
                    <div className='pt-3 pb-5'>
                        <Accordion>
                            <Accordion.Item eventKey="0" className='accordionCard'>
                                <Accordion.Header>
                                    <div className="card-link">
                                        <span className='d-inline-flex'>
                                            <img className='w-20 me-3' src="./dbs/T&C-icon.png" alt="" />
                                            <h2 className="card-header text-white">
                                                General T&C
                                            </h2>
                                        </span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className=" " itemType="https://schema.org/Answer">
                                        <div className="card-body ms-3" itemProp="text">
                                            <p className='ms-4'>CardBaazi is committed to respecting your privacy and complies with the prevailing data protection and privacy laws.
                                            </p>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='accordionCard'>
                                <Accordion.Header>
                                    <div className="card-link">
                                        <span className='d-inline-flex'>
                                            <img className='w-20 me-3' src="./dbs/T&C-icon.png" alt="" />
                                            <h2 className="card-header text-white">
                                                Milestone Diwali Rewards T&C
                                            </h2>
                                        </span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div itemType="https://schema.org/Answer">
                                        <div className="card-body ms-3" itemProp="text">
                                            <p className='ms-4'>CardBaazi is committed to respecting your privacy and complies with the prevailing data protection and privacy laws.
                                            </p>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='accordionCard'>
                                <Accordion.Header>
                                    <div className="card-link">
                                        <span className='d-inline-flex'>
                                            <img className='w-20 me-3' src="./dbs/T&C-icon.png" alt="" />
                                            <h2 className="card-header text-white">
                                                Leaderboard T&C
                                            </h2>
                                        </span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body><div itemType="https://schema.org/Answer">
                                    <div className="card-body ms-3" itemProp="text">
                                        <p className='ms-4'>CardBaazi is committed to respecting your privacy and complies with the prevailing data protection and privacy laws.
                                        </p>
                                    </div>
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='accordionCard'>
                                <Accordion.Header>
                                    <div className="card-link">
                                        <span className='d-inline-flex'>
                                            <img className='w-20 me-3' src="./dbs/T&C-icon.png" alt="" />
                                            <h2 className="card-header text-white">
                                                Milestones Leaderboard T&C
                                            </h2>
                                        </span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div itemType="https://schema.org/Answer">
                                        <div className="card-body ms-3" itemProp="text">
                                            <p className='ms-4'>CardBaazi is committed to respecting your privacy and complies with the prevailing data protection and privacy laws.
                                            </p>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='accordionCard'>
                                <Accordion.Header>
                                    <div className="card-link">
                                        <span className='d-inline-flex'>
                                            <img className='w-20 me-3' src="./dbs/T&C-icon.png" alt="" />
                                            <h2 className="card-header text-white">
                                                Milestones Challenges T&C
                                            </h2>
                                        </span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div itemType="https://schema.org/Answer">
                                        <div className="card-body ms-3" itemProp="text">
                                            <p className='ms-4'>CardBaazi is committed to respecting your privacy and complies with the prevailing data protection and privacy laws.
                                            </p>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className='accordionCard'>
                                <Accordion.Header>
                                    <div className="card-link">
                                        <span className='d-inline-flex'>
                                            <img className='w-20 me-3' src="./dbs/T&C-icon.png" alt="" />
                                            <h2 className="card-header text-white">
                                                Overall FAQ's
                                            </h2>
                                        </span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div itemType="https://schema.org/Answer">
                                        <div className="card-body ms-3" itemProp="text">
                                            <p className='ms-4'>CardBaazi is committed to respecting your privacy and complies with the prevailing data protection and privacy laws.
                                            </p>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                {/* <!-- diwali rewards tab --> */}
                <div className="tab-pane fade" id="diwali-rewards-tab-pane" role="tabpanel" aria-labelledby="diwali-rewards-tab" tabindex="0">
                    <div className=''>
                        <img src="./dbs/100Cr_banner.png" alt="" className="img-fluid w-100 h-auto rounded-0 bannerBorderRadius" />
                    </div>
                    <div className="pt-3">
                        <h1 className='text-yellow'>CLAIM YOUR <br /><span className='text-white small-text'>Diwali Rewards</span>
                        </h1>
                    </div>
                    <div className='pt-3'>
                        <img src="./dbs/claim_your_diwali_rwarss.png" alt="" className="img-fluid w-100 h-auto bannerBorderRadius" />
                    </div>
                    <div>
                        <img src="./dbs/winning_banner.png" alt="" className="img-fluid w-100 h-auto bannerBorderRadius" />
                    </div>
                </div>

                {/* <!-- Milestone-Challenges tab --> */}
                <div className="tab-pane fade" id="milestone-challenges-tab-pane" role="tabpanel" aria-labelledby="milestone-challenges-tab" tabindex="0">
                    <div className='pt-3 pb-5'>
                        <ul className="nav nav-tabs nav-tabs-inner" id="infoInnerTab" role="tablist">
                            <li role="presentation" className='presentation'>
                                <button className="btn active inner-tab" id="info-inner-tab" data-bs-toggle="tab" data-bs-target="#info-inner-tab-pane" type="button" role="tab" aria-controls="info-inner-tab-pane" aria-selected="true">
                                    Info
                                </button>
                            </li>
                            <li role="presentation" className='presentation'>
                                <button className='btn inner-tab' id="diwali-rewards-inner-tab" data-bs-toggle="tab" data-bs-target="#diwali-rewards-inner-tab-pane" type="button" role="tab" aria-controls="diwali-rewards-inner-tab-pane" aria-selected="true">
                                    Pro Player Challenge
                                </button>
                            </li>
                            <li role="presentation" className='presentation'>
                                <button className='btn inner-tab' id="milestone-challenges-inner-tab" data-bs-toggle="tab" data-bs-target="#milestone-challenges-inner-tab-pane" type="button" role="tab" aria-controls="milestone-challenges-inner-tab-pane" aria-selected="false">
                                    Safe Player Challenge
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="infoInnerTabContent">
                        <div className="tab-pane fade show active" id="info-inner-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">
                            <div>
                                <img src="./dbs/milestoneChallenges.jpg" alt="" className="img-fluid w-100 h-auto bannerBorderRadius" />
                            </div>
                        </div>

                    </div>
                    <div className="tab-content" id="infoInnerTabContent">
                        <div className="tab-pane fade" id="diwali-rewards-inner-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">
                            <div>
                                <div className="boxbg">
                                    <div className="box1 mb-3">
                                        <table className="table1">
                                            <thead>
                                                <tr className="headbg">
                                                    <td className="heading">player name</td>
                                                    <td className="heading">No. of Game Plays</td>

                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div className="box">

                                        <table className="table2">
                                            <tbody>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="tab-content" id="infoInnerTabContent">
                        <div className="tab-pane fade" id="milestone-challenges-inner-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">
                            <div>
                                <div className="boxbg">
                                    <div className="box1 mb-3">
                                        <table className="table1">
                                            <thead>
                                                <tr className="headbg">
                                                    <td className="heading">player name</td>
                                                    <td className="heading">No. of Game Plays</td>

                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div className="box">

                                        <table className="table2">
                                            <tbody>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* <!-- Milestone-Leaderboards tab --> */}
                <div className="tab-pane fade" id="milestone-leaderboard-tab-pane" role="tabpanel" aria-labelledby="milestone-leaderboard-tab" tabindex="0">
                    <div className='pt-3 pb-5'>
                        <ul className="nav nav-tabs nav-tabs-inner" id="milestoneInfoInnerTab" role="tablist">
                            <li role="presentation" className='presentation'>
                                <button className="btn active inner-tab" id="milestone-info-inner-tab" data-bs-toggle="tab" data-bs-target="#milestone-info-inner-tab-pane" type="button" role="tab" aria-controls="milestone-info-inner-tab-pane" aria-selected="true">
                                    Info
                                </button>
                            </li>
                            <li role="presentation" className='presentation'>
                                <button className='btn inner-tab' id="milestone-champion-inner-tab" data-bs-toggle="tab" data-bs-target="#milestone-champion-inner-tab-pane" type="button" role="tab" aria-controls="milestone-champion-inner-tab-pane" aria-selected="true">
                                    Champion
                                </button>
                            </li>
                            <li role="presentation" className='presentation'>
                                <button className='btn inner-tab' id="milestone-hustlers-inner-tab" data-bs-toggle="tab" data-bs-target="#milestone-hustlers-inner-tab-pane" type="button" role="tab" aria-controls="milestone-hustlers-inner-tab-pane" aria-selected="false">
                                    Hustlers
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="milestoneInnerTabContent">
                        <div className="tab-pane fade show active" id="milestone-info-inner-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">
                            <div>
                                <img src="./dbs/Milestone-Leaderboards_3009.jpg" alt="" className="img-fluid w-100 h-auto bannerBorderRadius" />
                            </div>
                        </div>

                    </div>
                    <div className="tab-content" id="milestoneInnerTabContent">
                        <div className="tab-pane fade" id="milestone-champion-inner-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">
                            <div>
                                <div className="row mb-3 mx-2">
                                    <div className="col-md-3 mx-3 border border-white form-label text-center text-white rounded px-1">1st - 10th Oct
                                    </div>
                                    <div className="col-md-3 mx-3 border border-white form-label text-center text-white rounded px-1">1st - 10th Nov
                                    </div>
                                    <div className="col-md-3 mx-3 border border-white form-label text-center text-white rounded px-1">1st - 10th Dec
                                    </div>
                                    <div className="col-md-3 mx-3">
                                        <div className="card mt-4">
                                            <img src="./dbs/winner-2-icon.svg" className="card-img-top winner-icon" alt="..." />
                                            <img src="./dbs/sankesh-jain.png" className="card-img-top" alt="..." />
                                            <div className="card-body bg-white">
                                                <p className="card-text">Sankesh Jain</p>
                                            </div>
                                        </div>
                                        <div className="card-name-detail">
                                            <p>1 LAC GTD Winner <br /> <span className='card-name-detail-won'>Won ₹15,000</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mx-3">
                                        <div className="card mt-2">
                                            <img src="./dbs/winner-1-icon.svg" className="card-img-top winner-icon" alt="..." />
                                            <img src="./dbs/sankesh-jain.png" className="card-img-top" alt="..." />
                                            <div className="card-body bg-white">
                                                <p className="card-text">Sankesh Jain</p>
                                            </div>
                                        </div>
                                        <div className="card-name-detail">
                                            <p>1 LAC GTD Winner <br /> <span className='card-name-detail-won'>Won ₹15,000</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mx-3">
                                        <div className="card mt-4">
                                            <img src="./dbs/winner-3-icon.svg" className="card-img-top winner-icon" alt="..." />
                                            <img src="./dbs/sankesh-jain.png" className="card-img-top" alt="..." />
                                            <div className="card-body bg-white">
                                                <p className="card-text">Sankesh Jain</p>
                                            </div>
                                        </div>
                                        <div className="card-name-detail">
                                            <p>1 LAC GTD Winner <br /> <span className='card-name-detail-won'>Won ₹15,000</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxbg">
                                    <div className="box1 mb-3">
                                        <table className="table1">
                                            <thead>
                                                <tr className="headbg">
                                                    <td className="heading">Rank</td>
                                                    <td className="heading">player name</td>
                                                    <td className="heading">prize</td>

                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div className="box">

                                        <table className="table2">
                                            <tbody>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>4th</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg3'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>5th</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg3'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>6th</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg3'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>7th</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg3'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>8th</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg3'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>9th</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg3'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>10th</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg3'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="tab-content" id="milestoneInnerTabContent">
                        <div className="tab-pane fade" id="milestone-hustlers-inner-tab-pane" role="tabpanel" aria-labelledby="info-tab" tabindex="0">
                            <div>
                                <div className="row mb-3 mx-2">
                                    <div className="col-md-3 mx-3 border border-white form-label text-center text-white rounded px-1">1st - 10th Oct
                                    </div>
                                    <div className="col-md-3 mx-3 border border-white form-label text-center text-white rounded px-1">1st - 10th Nov
                                    </div>
                                    <div className="col-md-3 mx-3 border border-white form-label text-center text-white rounded px-1">1st - 10th Dec
                                    </div>
                                    <div className="col-md-3 mx-3">
                                        <div className="card mt-4">
                                            <img src="./dbs/winner-2-icon.svg" className="card-img-top winner-icon" alt="..." />
                                            <img src="./dbs/sankesh-jain.png" className="card-img-top" alt="..." />
                                            <div className="card-body bg-white">
                                                <p className="card-text">Sankesh Jain</p>
                                            </div>
                                        </div>
                                        <div className="card-name-detail">
                                            <p>1 LAC GTD Winner <br /> <span className='card-name-detail-won'>Won ₹15,000</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mx-3">
                                        <div className="card mt-2">
                                            <img src="./dbs/winner-1-icon.svg" className="card-img-top winner-icon" alt="..." />
                                            <img src="./dbs/sankesh-jain.png" className="card-img-top" alt="..." />
                                            <div className="card-body bg-white">
                                                <p className="card-text">Sankesh Jain</p>
                                            </div>
                                        </div>
                                        <div className="card-name-detail">
                                            <p>1 LAC GTD Winner <br /> <span className='card-name-detail-won'>Won ₹15,000</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mx-3">
                                        <div className="card mt-4">
                                            <img src="./dbs/winner-3-icon.svg" className="card-img-top winner-icon" alt="..." />
                                            <img src="./dbs/sankesh-jain.png" className="card-img-top" alt="..." />
                                            <div className="card-body bg-white">
                                                <p className="card-text">Sankesh Jain</p>
                                            </div>
                                        </div>
                                        <div className="card-name-detail">
                                            <p>1 LAC GTD Winner <br /> <span className='card-name-detail-won'>Won ₹15,000</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxbg">
                                    <div className="box1 mb-3">
                                        <table className="table1">
                                            <thead>
                                                <tr className="headbg">
                                                    <td className="heading">player name</td>
                                                    <td className="heading">No. of Game Plays</td>

                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div className="box">

                                        <table className="table2">
                                            <tbody>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className='ppcTable'>
                                                    <td>
                                                        <div className='ppcTableBg1'>Chessplayer</div>
                                                    </td>
                                                    <td>
                                                        <div className='ppcTableBg2'>
                                                            <img className='me-2' src='./dbs/quality.svg' />50234
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- Milestone-Leaderboards tab ends here --> */}
            </div>

        </>
    )
}