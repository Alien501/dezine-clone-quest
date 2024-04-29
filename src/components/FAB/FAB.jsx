import React from "react";

import './FAB.css';

export default function FAB() {
    return(
        <div className="fab-bottom-right">
            <div className="fab-icon-container fb">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
            </div>

            <div className="fab-icon-container x">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
            </div>
        
            <div className="fab-icon-container ln">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
            </div>

            <div className="fab-icon-container un">
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26" style={
                    {
                        display:'block!important',width:'16px!important',height:'16px!important',fill: 'currentColor!important'}}>
                    <path d="M14.98.15c7.035.248 12.559 6.206 12.313 13.284-.246 7.077-6.169 12.633-13.203 12.386-7.035-.247-12.558-6.206-12.313-13.283.012-.34.029-.678.068-1.011.02-.17.283-1.455 1.431-1.302.861.115 1.133.873 1.07 1.45-.012.111-.037.404-.037.404-.016.181-.027.364-.034.547-.197 5.691 4.245 10.483 9.902 10.682 5.657.199 10.42-4.27 10.618-9.961.198-5.692-4.244-10.483-9.901-10.682a10.224 10.224 0 00-1.514.059l-.37.049s-1.48.246-1.809-.76c-.319-.972.426-1.535.93-1.64.92-.178 1.875-.256 2.85-.221zM1.412 1.162c.12 0 .231.033.328.09l13.466 6.944.119.061.05.026v.001c1.204.66 2 1.796 2 3.088l-.001.028.001 4.954v.786l.002.016a.66.66 0 01-.655.665.644.644 0 01-.307-.078l-3.129-1.583c-1.264-.596-2.124-1.72-2.136-3.01 0-.968-.153-2.093-1.693-3.427-.79-.685-1.708-1.483-2.642-2.297l-.701-.612a3239.267 3239.267 0 01-5.145-4.5l-.01-.008-.068-.079a.667.667 0 01.521-1.065z"></path>
                </svg>
            </div>
        </div>

    )
}