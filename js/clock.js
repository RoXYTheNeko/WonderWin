// Ce code n'est pas de moi, mais je l'ai modifié.
function time(id)
{
        date = new Date;
        
        j = date.getDate();
        jour = date.getDay();
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        outString = /*'Nous sommes le '+jours[jour]+' '+j+' '+mois[moi]+' '+annee+' il est '*/h+':'+m/*+':'+'s*/;
        document.getElementById(id).innerHTML = outString;
        setTimeout('time("'+id+'");','1000');
        return true;
}