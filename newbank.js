console.log("Welcome! Welcome ! Welcome!");

function statements()   //commonn to all
{   console.log("____________________________________________")
    console.log("The current balance is:"+this.cb);
    console.log("THe last transaction was of :"+this.lt);
    
}


function last()  ////=========fxn to get all transactions===== for all
{
    console.log("The last few transactions were:");
    console.log(this.lts);
}

function withdraw(a) //===========================WITHDRAW FYNCTION================================
{
    if(a>0 && a<this.cb)
    {
        this.cb -=a;
        this.lt=-a;
        this.lts[this.i]=this.lt;
        this.i +=1;
      
    }
    else
    {
        console.log("Invalid!!!!!1");
    }
}


function piggybank()    //piggy bank object properties definig fxn for all object
{
    this.cb=0;
    this.lt=0;
    this.lts=[];
    this.extra=0;
    this.i=0;
    this.s=statements;
    this.l=last;
    this.w1=withdraw;
    this.d1=deposit;
    this.dc=0; //  deposit counter 
    this.wc=0;  // withdrwaw counter
    this.pts=0;// points counter
    this.p=points; //points fcxn
    this.dep=[];
    this.sum=0;
    this.limit=0;
}

var pg1= new piggybank();  //creation of first object
var pg2= new piggybank(); //creation of second object.
var pg3= new piggybank(); //CREATION OF THIRD OBJECT
pg1.limit=100000; // setiing capacity of each bank
pg2.limit=200000;
pg3.limit=300000;


function points()   // =================FUNCTION TO DISPLAY POINTS========
{
    console.log("The total points won::"+this.pts);
}


function deposit(a)  // included fxn inside object to access all object properties using this 
{
    if(a>0)
    {
        this.cb +=a;
       
        if(this.cb>this.limit)
        {
            this.extra=this.cb-this.limit;
            this.cb -=this.extra;
            this.lt=a-this.extra;
        
            if(this==pg1)
            {
            pg2.d1(this.extra);
          
            }

            if(this==pg2)
            {
            pg3.d1(this.extra);
           
            }
        }

        else
        {
        this.lt=a;
        }
        
        this.lts[this.i]=this.lt;
        this.i +=1;
     //=====================counter and pts for deposits 
        this.dep[this.dc]=this.lt;
        this.dc +=1;  

        if(this.dc % 10==0) 
        {
            this.pts+=50; 
        }

         if(this.dc>=5)  //condtioln for 50 pts if avg of las t five deposit greater than 5000
        {
            for(var j=this.dc-1; j>=this.dc-5;j--)
            {
            this.sum +=this.dep[j];
           
            }
            this.sum=this.sum*0.2;

            if(this.sum>=5000)
            {
            this.pts +=50;
            }
        }
    }
    else
    {
        console.log("Enter amount greater than 0!!")
    }
}

pg1.d1(50000);
pg1.d1(50000);
pg1.d1(50000);
pg1.d1(50000);
pg1.d1(50000);
pg1.d1(50000);
pg1.d1(50000);
pg1.s();
pg1.l();
pg2.s();
pg2.l();
pg3.s();
pg3.l();