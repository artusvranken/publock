import { Publock } from './Publock';

function functionalityWorks(message : string, result : boolean)
{
    console.log(result + ": " + message);
}

function creating_a_new_publock_works()
{
    let newPublock = new Publock();
    
    let messgeChain = typeof newPublock.messageChain != 'undefined';
    let connections = typeof newPublock.connections != 'undefined';
    let offeringConnection = typeof newPublock.offeringConnection != 'undefined';
    let answeringConnection = typeof newPublock.answerConnection != 'undefined';
    
    let result = messgeChain && connections && offeringConnection && answeringConnection;
    
    functionalityWorks("creating a new publock works.", result);
}
creating_a_new_publock_works();

function connecting_to_other_publock_works()
{
    let p1 = new Publock(false);
    let p2 = new Publock(false);
    
    p1.connectToPeer(p2.answeringConnection);
    p2.answerConnection(p1.offeringConnection);
    
    let result = p1.connections.size != 0 && p2.connections.size != 0;
    
    functionalityWorks("Connecting to other publocks works.", result);
}
connecting_to_other_publock_works();