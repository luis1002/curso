/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var ctx, bandera;
        reset = document.getElementbyld("reset");
        canvas = document.getElementbyld("lienzo");

        canvas.style.display = "block";
       ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = 350;

        canvas.addEventListener("touchstart",function(e){
        var touchobj = e.changedTouches[0];
        dibuja(touchobj.clientX,touchobj.clientY);
        bandera = true;
        e.preventDefault();
        },false);

        canvas.addEventListener("touchmove",function(e){
            if(bandera){
                var touchobj = e.changedTouches[0];
                dibuja(touchobj.clientX,touchobj.clientY);
                e.preventDefault();
            }
        },false);

        canvas.addEventListener("touchend",function(e){
            bandera = false;
            e.preventDefault();
        },false);

        function dibuja(x, y){
            if(bandera){
                ctx.beginPath(); ctx.strokeStyle="black";
                ctx.linewidth = 4; ctx.lineJoin="round";
                ctx.moveTo(lastX, lastY); ctx.lineTo(x, y);
                ctx.closePath(); ctx.stroke();
            }
            lastX = x; lastY = y;
        }
        reset.addEventListener("click",function(){
            ctx.fillStyle="EEEEEE"
            ctx.fillRect(0,0, canvas.width, canvas.height);
        }, false);
    }
    

    
};
