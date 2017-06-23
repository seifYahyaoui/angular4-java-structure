/**
 * Created by seif on 6/15/17.
 */


// import {Component} from "@angular/core";
// @Component({
//   selector: 'rxjs-cmp',
//   template: `
// <div class="container">
//     <div class="header">
//          <h2>Who to follow</h2><a href="#" class="refresh">Refresh</a>
//     </div>
//     <ul class="suggestions">
//         <li class="suggestion1">
//             <img />
//             <a href="#" target="_blank" class="username">this will not be displayed</a>
//             <a href="#" class="close close1">x</a>
//         </li>
//         <li class="suggestion2">
//             <img />
//             <a href="#" target="_blank" class="username">neither this</a>
//             <a href="#" class="close close2">x</a>
//         </li>
//         <li class="suggestion3">
//             <img />
//             <a href="#" target="_blank" class="username">nor this</a>
//             <a href="#" class="close close3">x</a>
//         </li>
//     </ul>
// </div>
// <script src="http://cdnjs.cloudflare.com/ajax/libs/rxjs/2.2.26/rx.js"></script>
// <script src="http://cdnjs.cloudflare.com/ajax/libs/rxjs/2.2.26/rx.async.js"></script>
// <script src="http://cdnjs.cloudflare.com/ajax/libs/rxjs/2.2.26/rx.coincidence.js"></script>
// <script src="http://cdnjs.cloudflare.com/ajax/libs/rxjs/2.2.26/rx.binding.js"></script>
// <script src="http://cdnjs.cloudflare.com/ajax/libs/rxjs/2.2.26/rx.time.js"></script>
// <script src="http://cdnjs.cloudflare.com/ajax/libs/rxjs-dom/2.0.7/rx.dom.js"></script>`
// })
// export class RXJSComponent{
//
// }

/////////////twitter example//////////////////////////////

// var refreshButton = document.querySelector('.refresh');
// var closeButton1 = document.querySelector('.close1');
// var closeButton2 = document.querySelector('.close2');
// var closeButton3 = document.querySelector('.close3');
//
// var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');
// var close1ClickStream = Rx.Observable.fromEvent(closeButton1, 'click');
// var close2ClickStream = Rx.Observable.fromEvent(closeButton2, 'click');
// var close3ClickStream = Rx.Observable.fromEvent(closeButton3, 'click');
//
// var requestStream = refreshClickStream.startWith('startup click')
//   .map(function() {
//     var randomOffset = Math.floor(Math.random()*500);
//     return 'https://api.github.com/users?since=' + randomOffset;
//   });
//
// var responseStream = requestStream
//   .flatMap(function (requestUrl) {
//     return Rx.Observable.fromPromise($.getJSON(requestUrl));
//   });
//
// function createSuggestionStream(closeClickStream) {
//   return closeClickStream.startWith('startup click')
//     .combineLatest(responseStream,
//       function(click, listUsers) {
//         return listUsers[Math.floor(Math.random()*listUsers.length)];
//       }
//     )
//     .merge(
//       refreshClickStream.map(function(){
//         return null;
//       })
//     )
//     .startWith(null);
// }
//
// var suggestion1Stream = createSuggestionStream(close1ClickStream);
// var suggestion2Stream = createSuggestionStream(close2ClickStream);
// var suggestion3Stream = createSuggestionStream(close3ClickStream);
//
//
// // Rendering ---------------------------------------------------
// function renderSuggestion(suggestedUser, selector) {
//   var suggestionEl = document.querySelector(selector);
//   if (suggestedUser === null) {
//     suggestionEl.style.visibility = 'hidden';
//   } else {
//     suggestionEl.style.visibility = 'visible';
//     var usernameEl = suggestionEl.querySelector('.username');
//     usernameEl.href = suggestedUser.html_url;
//     usernameEl.textContent = suggestedUser.login;
//     var imgEl = suggestionEl.querySelector('img');
//     imgEl.src = "";
//     imgEl.src = suggestedUser.avatar_url;
//   }
// }
//
// suggestion1Stream.subscribe(function (suggestedUser) {
//   renderSuggestion(suggestedUser, '.suggestion1');
// });
//
// suggestion2Stream.subscribe(function (suggestedUser) {
//   renderSuggestion(suggestedUser, '.suggestion2');
// });
//
// suggestion3Stream.subscribe(function (suggestedUser) {
//   renderSuggestion(suggestedUser, '.suggestion3');
// });


//////////observable/////////////////////
function map(transFormFn){
  const inputObservable = this;
  const outputObservable = createObservables(function subscribe(outputObserver) {
    console.log('outputObserver=====>',outputObserver);
    inputObservable.subscribe({
      next: function (x) {
        const y = transFormFn(x);
        outputObserver.next(y);
      },
      error: e => outputObserver.error(e),
      complete: () => outputObserver.complete(),
    });
  });
  return outputObservable;
}

function filter(filterFn){
  const inputObservable = this;
  const outputObservable = createObservables(function subscribe(outputObserver) {
    inputObservable.subscribe({
      next: function (x) {
        if(filterFn(x)){
          outputObserver.next(x);
        }
      },
      error: e => outputObserver.error(e),
      complete: () => outputObserver.complete(),
    });
  });
  return outputObservable;
}

function delay(period){
  const inputObservable = this;
  const outputObservable = createObservables(function subscribe(outputObserver) {
    inputObservable.subscribe({
      next: function (x) {
        setTimeout(()=>{
          outputObserver.next(x);
        }, period)
      },
      error: e => outputObserver.error(e),
      complete: () => outputObserver.complete(),
    });
  });
  return outputObservable;
}

function createObservables(subscribe) {
  return {
    subscribe: subscribe,
    map: map,
    filter: filter,
    delay: delay
  };
}

// arrayObservable = createObservables(function subscribe(obj) {
//     arr.forEach(obj.next);
//     obj.complete();
//   }
// );
//
// clickEventObservable = createObservables(function subscribe(obj) {
//     document.addEventListener('click',obj.next);
//     obj.complete();
//   }
// );


const arr = [10, 30, 40];
console.log('before');

const observer = {
  next: function nextCallBack(data) {
    console.log(data);
  },
  error: function errorCallBack(error) {
    console.error(error);
  },
  complete: function completeCallBack() {
    console.log('complete');
  }
}


//arrayObservable.map(x => x/10).filter(x => x > 3).delay(800).subscribe(observer);

//clickEventObservable.map(ev => ev.clientX).filter(x => x < 300).delay(400).subscribe(observer);
