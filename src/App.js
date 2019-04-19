import React, { Component } from 'react';

// import $ from 'jquery';
// import {} from 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Insight from './components/Insight'

class App extends Component {
  render() {
    return (
      <>
        <div style={{backgroundColor: '#363636', height: '40px'}}>
          <span style={{color:'#cccccc', fontSize:'18pt',margin:'5px'}}>Steeme</span>
        </div>
        <div class="tabbable tabs-left" style={{width: '100%'}}>
            <ul class="nav nav-tabs">
                <li class="active">
                    <a href="#steem_insight" data-toggle="tab">Steem Insight</a>
                </li>
                <li>
                    <a href="#send_sbd_tab" data-toggle="tab">Send SBD</a>
                </li>
                <li>
                    <a href="#delegate_tab" data-toggle="tab">Delegate STEEM POWER</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="steem_insight">
                  <Insight />
                </div>
                <div class="tab-pane" id="send_sbd_tab">
                  <div id="transfer_money_panel"></div>
                </div>
                <div class="tab-pane" id="delegate_tab">
                  <div id="delegate_steem_power"></div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="pleaseWaitDialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"  data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-body">
                        <h4>Processing...</h4>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar"
                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="modal" id="show_detail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
          <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-body">
              <div id='show_detail_area'>aa</div>
            </div>
            </div>
          </div>
        </div>   
        <footer class="footer">
          <div class="container">
            <span class="text-muted">steeme.com | created by @asbear</span>
          </div>
        </footer> 
      </> 
    );
  }
}

export default App;
