const { createApp } = Vue

  createApp({
    data() {
      return {
        findTxt: "",
        newTxt: "",
        texting: false,
        currentUser: 0,
        cursor: {
            visible: false,
            index: false
        },
        notifyOn: false,
        notifyMsg: false,
        notifyMsgg: false,
        showEmoji: false,
        showOptions: false,
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Prova ad attivare le notifiche desktop!',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ] 
      }
    },
    methods:{
        changeUser(index){
            this.currentUser = index;
        },
        changeIcon(){
            this.texting = true
            if(this.newTxt == ""){
                this.texting = false
            }
        },
        newMsg(){
            const DateTime = luxon.DateTime;
            let currentDate = DateTime.local().toFormat('dd/MM/yyyy HH:mm').slice(11);
            if(this.newTxt == ""){

            }
            else{
                let newMessage = {
                    date: currentDate,
                    message: this.newTxt,
                    status: 'sent'
                };
                this.contacts[this.currentUser].messages.push(newMessage);
                this.newTxt = "";
                this.texting = false;

                setTimeout(() => {
                    let comMsg = {
                        date: currentDate,
                        message: "ok!",
                        status: 'received'
                    }
                    this.contacts[this.currentUser].messages.push(comMsg);
                }, 1000);
            }

        },
        searchChat(){
            this.contacts.forEach((elem) => {
                if(elem.name.toLowerCase().includes(this.findTxt.toLowerCase())){
                    elem.visible = true;
                }
                else{
                    elem.visible = false
                }
            })
        },
        showDrop(index){
            if(this.cursor.visible != false && this.cursor.index != index){
                this.cursor.visible = false;
                this.cursor.index = false;
            }
            this.cursor.visible = this.cursor.visible ? false : true
            this.cursor.index = index;
        },
        deleteMsg(index){
            this.contacts[this.currentUser].messages.splice(index, 1);
            this.cursor.visible = false;
            this.cursor.index = false;
        },
        deleteChat(){
            this.contacts.splice(this.currentUser, 1);
            this.showOptions = false;
        },
        activateNot(){
            if(this.notifyOn){
                this.notifyOn = false;
                this.notifyMsgg = true;
                if(notifyMsgg = true){
                    setTimeout(() => {
                        this.notifyMsgg = false;
                    }, 2500);
                }
                this.showOptions = false;
            }
            this.showOptions = false;
        },
        notifyAlert(){
            this.notifyOn = true;
            this.notifyMsg = true;
            if(notifyMsg = true){
                setTimeout(() => {
                    this.notifyMsg = false;
                }, 2500);
            }
        }
    }
  }).mount('#app')