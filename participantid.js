const Time = require('Time');
const Patches = require('Patches');
const Reactive = require('Reactive');
const Multipeer = require('Multipeer');
const Diagnostics = require('Diagnostics');
const Participants = require('Participants');

const minTurnCount = 2;
const maxTurnCount = 4;

var BurstCountdown = 0;
var dudei = 8;
var curplayer = 0;
var activeparticipants = [];

(async function () {
  try{
    const self = await Participants.self;
  const Participants = await Participants.getAllotherParticipants();
  }catch(e){} 
  
  try{
    Participants.push(self);

    Participants.forEach(function(Participant){
      participant.isActiveInSameEffect.monitor().subscribeWithSnapshot({
        userIndex:Participants.indexof(Participants),
      },function (event, snapshot) {
        let Participant =   Participants [snapshot.userIndex];
        OnUserEnterOrLeave(event.newValue,participant);
      });
    activeparticipants.push(participant);
    });
  
    }catch(e){}
  


  
  //Add the same 'Enter/Leave Effect' call back to new call joiners

  Participants.onOtherParticipantAdded().subscribe(function(participant){
      Participants.push (participant);
      participant.isActiveInSameEffect.monitor({fireonInitialValue:true}).subscribeWithSnapshot({
        userIndex: participant.indexof(participant),
      }, function(event,snapshot) {
        let participant = Participants[snapshot,userIndex];
        OnUserEnterOrLeave(event,newValue,participant);
      });
  });

  SortActiveParticipantList();
  function OnUserEnterOrLeave(isActive,participant) {
    if (isActive) {
      let previousparticipant = activeparticipants[curplayer];
      activeparticipants.push(participant);
      SortActiveParticipantList()
    }else{
      let activeIndex = activeparticipants.indexOf(Participant);
      activeparticipants.splice(activeIndex,1); 
    }
  }

    function SortActiveParticipantList(){
      activeparticipants.sort(function(a,b){
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id){
        return 1;
      }
    });

    dudei = 0;
    activeparticipants.forEach(element => {
      if (activeparticipants[dudei].id == self.id) {
        Diagnostics.log("checking if:" + dudei);
        Patches.inputs.setScalar('participantIndex',dudei);
        Diagnostics.log("player Index set" + dudei);
      }
      dudei++;
    });
}
})();
