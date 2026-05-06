export type TSpeaker = 'COMPOSURE' | 'INTERFACING' | 'SAVOIR FAIRE' | 'REACTION SPEED' | 'PERCEPTION' | 'HAND/EYE COORDINATION' | 'HALF LIGHT' | 'ELECTROCHEMISTRY' | 'PHYSICAL INSTRUMENT' | 'PAIN THRESHOLD' | 'ENDURANCE' | 'SUGGESTION' | 'ESPRIT DE CORPS' | 'EMPATHY' | 'INLAND EMPIRE' | 'VOLITION' | 'VISUAL CALCULUS' | 'DRAMA' | 'RHETORIC' | 'ENCYCLOPEDIA' | 'LOGIC' | 'HORRIFIC NECKTIE' | 'SPINAL CORD' | 'LIMBIC SYSTEM' | 'ANCIENT REPTILIAN BRAIN' | 'DOLORES DEI' | 'PISSF****T' | 'AUTHORITY' | 'KLAASJE' | 'FUCK THE WORLD' | 'CUNOESSE' | 'CUNO' | 'NOVELTY DICEMAKER' | 'NOID' | 'EGG HEAD' | 'ANDRE' | 'ACELE' | 'TIAGO' | 'SOONA' | 'JOYCE MESSIER' | 'MEASUREHEAD' | 'EVRART CLAIRE' | 'THE GARDENER' | 'CALL ME MAÑANA' | 'TITUS HARDIE' | 'THEO' | 'SHANKY' | 'RUBY' | 'GLEN' | 'FAT ANGUS' | 'EUGENE' | 'ALAIN' | 'SHIVERS' | 'KIM KITSURAGI' | 'CONCEPTUALIZATION';

export type TDialog<T extends TSpeaker = TSpeaker> = {
    id: number,
    portraitSpeaker: T,
    audio: string,
    dialog: {
        id: number,
        speaker: T | 'YOU',
        color: string,
        paragraph: string
    }[]
}

export const dialogs: TDialog[] = [
    {
        id: 1,
        portraitSpeaker: 'SHIVERS',
        audio: '/src/lib/assets/audios/dialogues/shivers_church_revachol.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "I AM LA REVACHOLIÈRE."
            },
            {
                id: 2,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "I AM THE CITY."
            },
            {
                id: 3,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: "What do you mean, *you are the city*?"
            },
            {
                id: 4,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "I AM A FRAGMENT OF THE WORLD SPIRIT, THE GENIUS LOCI OF REVACHOL."
            },
            {
                id: 5,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "MY HEART IS THE WIND CORRIDOR. THE BOTTOM OF MY AIR IS RED. I HAVE A HUNDRED THOUSAND LUMINOUS ARMS."
            },
            {
                id: 6,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "COME MORNING, I CARRY INDUSTRIAL DUST AND LET IT SETTLE ON TREE LEAVES. I SHAKE THE DUST FROM THOSE LEAVES AND ONTO YOUR COAT."
            },
            {
                id: 7,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "I'VE SEEN YOU, I'VE SEEN YOU! I'VE SEEN YOU WITH HER -- AND I'VE SEEN YOU WITHOUT HER. I'VE SEEN YOU ON THE CRESCENT OF THE HILL."
            },
            {
                id: 8,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: "How are you talking to me?"
            },
            {
                id: 9,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "THE MODULATIONS OF MY VOICE ARE NOTED DOWN WITH THERMOMETERS AND BAROMETERS. YOU FEEL ME IN YOUR NOSTRILS, ON THE LITTLE HAIRS ON THE BACK OF YOUR NECK."
            },
            {
                id: 10,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "I ALSO RESIDE IN YOUR LUNGS AND VESTIGIAL ORGANS. EVERYWHERE THERE IS SPACE."
            },
            {
                id: 11,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: "But who am *I*? Why are you talking to me?"
            },
            {
                id: 12,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "YOU ARE AN OFFICER OF THE CITIZENS MILITIA. *AGENTES IN REBUS*, WHEN YOU WEAR YOUR COAT, YOU WEAR MY SOUL."
            },
            {
                id: 13,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "YOU MOVE THROUGH MY STREETS FREELY IN MOTOR CARRIAGES AND ON FOOT. YOU HAVE ACCESS TO THE HIDDEN PLACES. YOU ALSO CIRCULATE AMONG THOSE WHO ARE HIDDEN."
            },
            {
                id: 14,
                speaker: 'SHIVERS',
                color: '#862f38',
                paragraph: "I NEED YOU. YOU CAN KEEP ME ON THIS EARTH. BE VIGILANT. I LOVE YOU."
            },
        ]
    },
    {
        id: 2,
        portraitSpeaker: 'CONCEPTUALIZATION',
        audio: 'src/lib/assets/audios/dialogues/conceptualization_fail.wav',
        dialog: [
            {
                id: 1,
                speaker: 'CONCEPTUALIZATION',
                color: '#4da5cc',
                paragraph: "Congratulations, you've somehow managed to fail at failing, which means, in a strange way, that you've succeeded?"
            },
        ]
    },
    {
        id: 3,
        portraitSpeaker: "KIM KITSURAGI",
        audio: '/src/lib/assets/audios/dialogues/kim_school_of_thought.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Why are you addressing my partner like that?"`
            },
            {
                id: 2,
                speaker: 'KIM KITSURAGI',
                color: '#ffff',
                paragraph: `"Don't you *Welcome to Revachol* me," the lieutenant fires back. "My grandfather came here from a three-thousand-year-old racist-isolationist culture, while your ancestors came to this island a mere three hundred years ago."`
            },
            {
                id: 3,
                speaker: 'KIM KITSURAGI',
                color: '#ffff',
                paragraph: `"Every school of thought and government has failed in this city -- but I love it nonetheless. It belongs to me as much as it belongs to you."`
            },
        ]
    },
    {
        id: 4,
        portraitSpeaker: "ALAIN",
        audio: 'src/lib/assets/audios/dialogues/alain_cerdo.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Law enforcement is a respectable occupation, sir."`
            },
            {
                id: 2,
                speaker: 'ALAIN',
                color: '#ffff',
                paragraph: `"Respectable professions don't shoot kids, *cerdo*!" He stands, hands wrapped tight around the back of his chair. "They don't beat confessions out of prisoners!"`
            },
        ]
    },
    {
        id: 5,
        portraitSpeaker: "EUGENE",
        audio: 'src/lib/assets/audios/dialogues/eugene.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"You, Eugene."`
            },
            {
                id: 2,
                speaker: 'EUGENE',
                color: '#ffff',
                paragraph: `"Me? No, man... I'm not a leader." He smiles suddenly. "You know Titus only recruited me 'cause I play the guitar? Said the team could use the morale boost."`
            },
        ]
    },
    {
        id: 6,
        portraitSpeaker: "FAT ANGUS",
        audio: 'src/lib/assets/audios/dialogues/fat_angus_piss.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"They drag you out back, light your corpse on fire and piss on you. They don't care."`
            },
            {
                id: 2,
                speaker: 'FAT ANGUS',
                color: '#ffff',
                paragraph: `"We didn't light him on fire!" You hear the fat man wheeze. He's trying to get up. "No one pissed on him either!"`
            },
        ]
    },
    {
        id: 7,
        portraitSpeaker: "GLEN",
        audio: 'src/lib/assets/audios/dialogues/glen_dip_shit.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'GLEN',
                color: '#ffff',
                paragraph: `"Hey... HEY, DIPSHIT!!! You hard of hearing or something?! The bossman is talking to you!"`
            },
        ]
    },
    {
        id: 8,
        portraitSpeaker: "RUBY",
        audio: 'src/lib/assets/audios/dialogues/ruby_puta_madre.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Tell me, what's my name? If you know... that about me, you must... know my name."`
            },
            {
                id: 2,
                speaker: 'RUBY',
                color: '#ffff',
                paragraph: `"Harry Du Bois," she replies quickly. "One corrupt motherfucker with the disco pants and the funny tie. Agent to La Puta Madre."`
            },
        ]
    },
    {
        id: 9,
        portraitSpeaker: "SHANKY",
        audio: 'src/lib/assets/audios/dialogues/shanky_factory.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'SHANKY',
                color: '#ffff',
                paragraph: `"TIME TO GO TO WORK IN THE SHIT FACTORY!!!"`
            },
        ]
    },
    {
        id: 10,
        portraitSpeaker: "THEO",
        audio: 'src/lib/assets/audios/dialogues/theo.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'THEO',
                color: '#ffff',
                paragraph: `"I'm tired of listening to your shit."`
            },
            {
                id: 2,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Thank you." (Nod to the old man.)`,
            },
            {
                id: 3,
                speaker: 'THEO',
                color: '#ffff',
                paragraph: `"Off yourself -- make it up to me, cop. I still got my money on that."`
            }
        ]
    },
    {
        id: 11,
        portraitSpeaker: "TITUS HARDIE",
        audio: 'src/lib/assets/audios/dialogues/titus.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'TITUS HARDIE',
                color: '#ffff',
                paragraph: `He nods to his friend. "The fucker got what was coming to him. Our conscience is clean."`
            },
            {
                id: 2,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"What I do is *different*. I enforce the law. You just kill people like it's nothing."`
            },
            {
                id: 3,
                speaker: 'TITUS HARDIE',
                color: '#ffff',
                paragraph: `"But you see, a *law*, lawman," he says, squeezing his beer can, "is something people agree upon. And here in Martinaise we agreed that this man had to die."`
            }
        ]
    },
    {
        id: 12,
        portraitSpeaker: "CALL ME MAÑANA",
        audio: 'src/lib/assets/audios/dialogues/call_me_manana.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Are you a... communist?"`
            },
            {
                id: 2,
                speaker: 'CALL ME MAÑANA',
                color: '#ffff',
                paragraph: `"No," he pauses to think for a moment. "I don't think I'm a communist. Seeing something of value and saying *I want it all to myself* is a much older and simpler notion. No science to it at all..."`
            },
            {
                id: 3,
                speaker: 'CALL ME MAÑANA',
                color: '#ffff',
                paragraph: `"Even a weak child can think it. The only things holding someone back are *I can't* and *I shouldn't*."`
            },
            {
                id: 4,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"But the stuff you do aligns admirably well with the World Republic, why not call yourself a communist?"`
            },
            {
                id: 5,
                speaker: 'CALL ME MAÑANA',
                color: '#ffff',
                paragraph: `"I have nothing against communists, they are honourable boiadeiros." He takes a swig from his flask. "And they have good analysis."`
            },
            {
                id: 6,
                speaker: 'CALL ME MAÑANA',
                color: '#ffff',
                paragraph: `"But my own code serves me well. If my code starts failing -- a code can fail a man as well as a man can fail a code -- then I will have to submit to a new one. Which may well be communism."`
            }
        ]
    },
    {
        id: 13,
        portraitSpeaker: "THE GARDENER",
        audio: 'src/lib/assets/audios/dialogues/the_gardener.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Where am I?"`
            },
            {
                id: 2,
                speaker: 'THE GARDENER',
                color: '#ffff',
                paragraph: `"What do you mean?"`
            },
            {
                id: 3,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"I'm... disorientated. I don't know where I am."`
            },
            {
                id: 4,
                speaker: 'THE GARDENER',
                color: '#ffff',
                paragraph: `"In Martinaise, sir. In the city of Revachol..." She looks around, thinking what else to say. "This intersection is called Roundabout North."`
            }
        ]
    },
    {
        id: 14,
        portraitSpeaker: "EVRART CLAIRE",
        audio: 'src/lib/assets/audios/dialogues/evrart_claire.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"I've just finished investigating the local drug trade."`
            },
            {
                id: 2,
                speaker: 'EVRART CLAIRE',
                color: '#ffff',
                paragraph: `"Ah yes, your side-investigation! Thank you." He adjusts his glasses. "You've got some spirit, clearing up phony drug accusations alongside this murder. I'll talk to the mayor and see if I can get you the key to the city, Harry. Now let's talk real business."`
            }
        ]
    },
    {
        id: 15,
        portraitSpeaker: "MEASUREHEAD",
        audio: 'src/lib/assets/audios/dialogues/measurehead.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Say nothing, size him up first.`
            },
            {
                id: 2,
                speaker: 'MEASUREHEAD',
                color: '#ffff',
                paragraph: `"ARE YOU ADMIRING MY MORPHOPHYSIOLOGY?" A ripple of muscle passes underneath his skin. He lets you look.`
            },
            {
                id: 3,
                speaker: 'MEASUREHEAD',
                color: '#ffff',
                paragraph: `"IT MUST BE FRIGHTENING TO STAND IN THE SHADOW OF THIS *RACIAL PINNACLE*. BE CALM, HAM SANDWICH. YOU ARE NOT IN DANGER, BECAUSE YOU ARE NOT A THREAT TO ME."`
            }
        ]
    },
    {
        id: 16,
        portraitSpeaker: "JOYCE MESSIER",
        audio: 'src/lib/assets/audios/dialogues/joyce_messier.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Cool. I *liberate* pretty hard myself."`
            },
            {
                id: 2,
                speaker: 'JOYCE MESSIER',
                color: '#ffff',
                paragraph: `"No," she shakes her head, slowly. "Not like me. I am the nether creature of the forbidden swamp, who pushed the king under a *shitwagon* and betrayed the Revolution..."`
            },
            {
                id: 3,
                speaker: 'JOYCE MESSIER',
                color: '#ffff',
                paragraph: `"Are you *liberated* enough to offer up your home on a plate for financial colonists?" She looks you in the eye. "No, I think not. Tell me -- now that I've *uncoiled* myself -- do you find me frightening?"`
            }
        ]
    },
    {
        id: 17,
        portraitSpeaker: "SOONA",
        audio: 'src/lib/assets/audios/dialogues/soona.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Sorry, but... who *are* you? What are you doing here?"`
            },
            {
                id: 2,
                speaker: 'SOONA',
                color: '#ffff',
                paragraph: `"I am Soona Luukanen-Kilde, the former lead programmer of Fortress Accident and RSA Radios. I have over 16 years of programming experience and I'm proficient in both Vox and Orbis languages..."`
            },
            {
                id: 3,
                speaker: 'SOONA',
                color: '#ffff',
                paragraph: `"If you're not here to hire me, I don't really know how can I help you." She turns back to the terminal.`
            }
        ]
    },
    {
        id: 18,
        portraitSpeaker: "TIAGO",
        audio: 'src/lib/assets/audios/dialogues/tiago.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'TIAGO',
                color: '#ffff',
                paragraph: `"You've come back to face your cacodaemons. Good. You ain't gonna outrun them if you don't drop the bottle."`
            },
            {
                id: 2,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Why do you keep talking about alcohol?"`
            },
            {
                id: 3,
                speaker: 'TIAGO',
                color: '#ffff',
                paragraph: `"*Estás crudo*, wey. I see deep inside you. Your body and spirit are suffering greatly from *overindulgment* and you don't even know it."`
            },
            {
                id: 4,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Great. More patronising. So original."`
            },
            {
                id: 5,
                speaker: 'TIAGO',
                color: '#ffff',
                paragraph: `"I know it's hard to admit that you've got a problem. I was like you once -- couldn't take an honest look into my own heart and see I was in pain."`
            }
        ]
    },
    {
        id: 19,
        portraitSpeaker: "ACELE",
        audio: 'src/lib/assets/audios/dialogues/acele.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Start crying.`
            },
            {
                id: 2,
                speaker: 'ACELE',
                color: '#ffff',
                paragraph: `The young woman has kept her eyes trained on her wires, waiting for the sorry spectacle to end, but it's gone awful quiet up there. Then, the sound of sobbing...`
            },
            {
                id: 3,
                speaker: 'ACELE',
                color: '#ffff',
                paragraph: `Looking up she sees a grown man -- on the wrong side of forty, his face bloated from alcohol and god knows what else -- not so quietly crying.`
            },
            {
                id: 4,
                speaker: 'ACELE',
                color: '#ffff',
                paragraph: `"This... isn't really about the hat, is it?"`
            },
            {
                id: 5,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"No..."`
            },
            {
                id: 6,
                speaker: 'ACELE',
                color: '#ffff',
                paragraph: `"You know, you're not the only one with issues." There's a motherly hint to her voice. "I self-medicate, shit... life's a horror, you know."`
            },
            {
                id: 7,
                speaker: 'ACELE',
                color: '#ffff',
                paragraph: `"Crying helps, though. Get it out of your system and then maybe we can talk, okay? I'll be here."`
            }
        ]
    },
    {
        id: 20,
        portraitSpeaker: "ANDRE",
        audio: 'src/lib/assets/audios/dialogues/andre.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'ANDRE',
                color: '#ffff',
                paragraph: `"Oh, the God of Dance is back! I'm dancing with the God of Dance!" He dances over to you, moving in a slightly less lame manner.`
            }
        ]
    },
    {
        id: 21,
        portraitSpeaker: "EGG HEAD",
        audio: 'src/lib/assets/audios/dialogues/egg_head.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'EGG HEAD',
                color: '#ffff',
                paragraph: `"Hard core!"`
            }
        ]
    },
    {
        id: 22,
        portraitSpeaker: "NOID",
        audio: 'src/lib/assets/audios/dialogues/noid.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Does this mean you are mentally ill?"`
            },
            {
                id: 2,
                speaker: 'NOID',
                color: '#ffff',
                paragraph: `"*Mental illness* is a term the powers use to homogenize people. I think I don't reach mental illness. I am merely politically ill. A suspicious element."`
            }
        ]
    },
    {
        id: 23,
        portraitSpeaker: "NOVELTY DICEMAKER",
        audio: 'src/lib/assets/audios/dialogues/novelty_dicemaker.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Don't call it a dump, you've made it nice and cosy here."`
            },
            {
                id: 2,
                speaker: 'NOVELTY DICEMAKER',
                color: '#ffff',
                paragraph: `"Yeah." She stares out of the window, not really hearing your words. "Or maybe it's the entire world that's cursed? It's such a precarious place. Nothing ever works out the way you wanted."`
            },
            {
                id: 3,
                speaker: 'NOVELTY DICEMAKER',
                color: '#ffff',
                paragraph: `"That's why people like role-playing games. You can be whoever you want to be. You can try again. Still, there's something inherently violent even about dice rolls."`
            },
            {
                id: 4,
                speaker: 'NOVELTY DICEMAKER',
                color: '#ffff',
                paragraph: `"It's like every time you cast a die, something disappears. Some alternative ending, or an entirely different world..." She picks up a pair of dice from the table and examines them under the light.`
            },
            {
                id: 5,
                speaker: 'NOVELTY DICEMAKER',
                color: '#ffff',
                paragraph: `"But anyway... thanks for sharing your theories, officer." She gives you a tired smile.`
            }
        ]
    },
    {
        id: 24,
        portraitSpeaker: "CUNO",
        audio: 'src/lib/assets/audios/dialogues/cuno.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"What happened to your art thing?"`
            },
            {
                id: 2,
                speaker: 'CUNO',
                color: '#ffff',
                paragraph: `"Locust city?" He swallows. "Cuno dropped that art shit coz Cuno's fucking *poor* and has shit for brains."`
            }
        ]
    },
    {
        id: 25,
        portraitSpeaker: "CUNOESSE",
        audio: 'src/lib/assets/audios/dialogues/cunoesse.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'CUNOESSE',
                color: '#ffff',
                paragraph: `"Punch yourself in the face again!" The other one won't even let you talk to Cuno.`
            },
            {
                id: 2,
                speaker: 'CUNOESSE',
                color: '#ffff',
                paragraph: `"KILL YOURSELF!!! Cuno, make him kill himself!"`
            }
        ]
    },
    {
        id: 26,
        portraitSpeaker: "FUCK THE WORLD",
        audio: 'src/lib/assets/audios/dialogues/fuck_the_world.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'FUCK THE WORLD',
                color: '#ffff',
                paragraph: `"FUCK THE FUCKING POLICE!!!!"`
            }
        ]
    },
    {
        id: 27,
        portraitSpeaker: "KLAASJE",
        audio: 'src/lib/assets/audios/dialogues/klaasje.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"I want to have fuck with you."`
            },
            {
                id: 2,
                speaker: 'KLAASJE',
                color: '#ffff',
                paragraph: `She erupts in laughter, all the fatigue swept from her face. "What was that!? That's not even how *words* are used. What did you say? C'mon, say it again!"`
            },
            {
                id: 3,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"I said I wanted to have sex with you."`
            },
            {
                id: 4,
                speaker: 'KLAASJE',
                color: '#ffff',
                paragraph: `"No, you see, that's not what you said. You said..." But she's unable to finish, consumed with laughter.`
            },
            {
                id: 5,
                speaker: 'KLAASJE',
                color: '#ffff',
                paragraph: `"C'mon man, pretty please! One more time!"`
            },
            {
                id: 6,
                speaker: 'AUTHORITY',
                color: '#ce95d8',
                paragraph: `Don't back down now. Say what you said again -- *proudly*.`
            },
            {
                id: 7,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"I said *I want to have fuck with you*."`
            },
            {
                id: 8,
                speaker: 'KLAASJE',
                color: '#ffff',
                paragraph: `"God damn right you did, you crazy asshole, you!" She wipes the tears from her eyes. "What kind of cop *are* you?"`
            },
            {
                id: 9,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"I'm a Cop of the Apocalypse."`
            },
            {
                id: 10,
                speaker: 'KLAASJE',
                color: '#ffff',
                paragraph: `"Has the time come already?" She raises an eyebrow.`
            },
            {
                id: 11,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Yes, we are mere minutes away from the total collapse of reality."`
            },
            {
                id: 12,
                speaker: 'KLAASJE',
                color: '#ffff',
                paragraph: `"Mere minutes? I should go and prepare then. Thank you, this has been delightful. I hope it does all come crashing down. Otherwise..." She extinguishes her cigarette.`
            },
            {
                id: 13,
                speaker: 'KLAASJE',
                color: '#ffff',
                paragraph: `"It's gonna suck for you later when you have to interrogate me."`
            },
            {
                id: 14,
                speaker: 'KLAASJE',
                color: '#ffff',
                paragraph: `"And, for the record: No, I didn't do it."`
            }
        ]
    },
    {
        id: 28,
        portraitSpeaker: "PISSF****T",
        audio: 'src/lib/assets/audios/dialogues/pissft.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"What's with the jackets?"`
            },
            {
                id: 2,
                speaker: 'PISSF****T',
                color: '#ffff',
                paragraph: `"What about them?"`
            },
            {
                id: 3,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Why does your jacket have 'PISSF****T' written on it?"`
            },
            {
                id: 4,
                speaker: 'PISSF****T',
                color: '#ffff',
                paragraph: `"Well, first off, it's a statement and not *necessarily* something that characterizes me as a person, even though the statement has character. And I *do* like piss..."`
            },
            {
                id: 5,
                speaker: 'PISSF****T',
                color: '#ffff',
                paragraph: `"The word PISSF****T epitomizes the struggle taking place in the world, things being defined as they seem, not as they are. And -- I guess -- it's also about communal spirit, the future, and *truly* appreciating our differences."`
            },
            {
                id: 6,
                speaker: 'PISSF****T',
                color: '#ffff',
                paragraph: `"Also, you've got to admit, it catches the eye. And since the grand piper is slowly but steadily moving towards basing the economy on it -- attention -- it is imperative that the medium itself convey the message."`
            },
            {
                id: 7,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Ee... what?"`
            },
            {
                id: 8,
                speaker: 'PISSF****T',
                color: '#ffff',
                paragraph: `"What I mean by this is -- we are *all* Pissf****ts. And that the world is inherently meaningless."`
            }
        ]
    },
    {
        id: 29,
        portraitSpeaker: "DOLORES DEI",
        audio: 'src/lib/assets/audios/dialogues/dolores_dei.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"That's it then."`
            },
            {
                id: 2,
                speaker: 'DOLORES DEI',
                color: '#ffff',
                paragraph: `"No, Harry. Not yet. There is one more thing you have to see..." She slides her hands down her chest, and onto her lower stomach. And smiles.`
            },
            {
                id: 3,
                speaker: 'DOLORES DEI',
                color: '#ffff',
                paragraph: `"I'm pregnant."`
            },
            {
                id: 4,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `"Is it mine?"`
            },
            {
                id: 5,
                speaker: 'DOLORES DEI',
                color: '#ffff',
                paragraph: `"Of course not." She looks down at her belly, then up into your old eyes...`
            },
            {
                id: 6,
                speaker: 'DOLORES DEI',
                color: '#ffff',
                paragraph: `"I terminated yours. Don't you remember, you *poor* fuck? Poverty-stricken fuck."`
            },
            {
                id: 7,
                speaker: 'DOLORES DEI',
                color: '#ffff',
                paragraph: `"Now, go ahead..." She wipes her palms into the silk of her gown. "...ask me more questions. Let's talk about *something else*."`
            }
        ]
    },
    {
        id: 30,
        portraitSpeaker: "ANCIENT REPTILIAN BRAIN",
        audio: 'src/lib/assets/audios/dialogues/ancient_reptilian_brain.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Will I be a... ghost now?`
            },
            {
                id: 2,
                speaker: 'ANCIENT REPTILIAN BRAIN',
                color: '#ffff',
                paragraph: `Brother, you already *were* a ghost. Up there, screaming -- along with all of them. Scaring each other. Haunting each other.`
            },
            {
                id: 3,
                speaker: 'ANCIENT REPTILIAN BRAIN',
                color: '#ffff',
                paragraph: `It's the living who are ghosts. The dead are silent. They don't rattle windows or write letters in blood. The living do. Leave them behind. Rest.`
            }
        ]
    },
    {
        id: 31,
        portraitSpeaker: "LIMBIC SYSTEM",
        audio: 'src/lib/assets/audios/dialogues/limbic_system.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Why?`
            },
            {
                id: 2,
                speaker: 'LIMBIC SYSTEM',
                color: '#ffff',
                paragraph: `Coz only love can break your heart...`
            },
            {
                id: 3,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Feel the pillow under your cheek.`
            },
            {
                id: 4,
                speaker: 'LIMBIC SYSTEM',
                color: '#ffff',
                paragraph: `Beep-beep-beep! The alarm is ringing, Harry. The disco circus goes on and on! You barely slept three hours last night.`
            }
        ]
    },
    {
        id: 32,
        portraitSpeaker: "SPINAL CORD",
        audio: 'src/lib/assets/audios/dialogues/spinal_cord.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `What was that about *unformed skulls*?`
            },
            {
                id: 2,
                speaker: 'SPINAL CORD',
                color: '#ffff',
                paragraph: `Psst. I'm gonna let you in on a little secret. Every vertebrae in your spine is an unformed skull ready to pop up and replace the old one. Like shark teeth. The one you're currently in has a little brain forming in it. Waiting for its turn...`
            },
            {
                id: 3,
                speaker: 'SPINAL CORD',
                color: '#ffff',
                paragraph: `...to rule the world.`
            }
        ]
    },
    {
        id: 33,
        portraitSpeaker: "HORRIFIC NECKTIE",
        audio: 'src/lib/assets/audios/dialogues/horrific_necktie.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `What if I don't want to listen to my necktie anymore?`
            },
            {
                id: 2,
                speaker: 'HORRIFIC NECKTIE',
                color: '#ffff',
                paragraph: `Snap out of it, bratan. This is no time for melancholy introspection. It's time to BUY THAT SPIRIT.`
            }
        ]
    },
    {
        id: 34,
        portraitSpeaker: "LOGIC",
        audio: 'src/lib/assets/audios/dialogues/logic.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'LOGIC',
                color: '#51c3f6',
                paragraph: `Do it for the picture puzzle. Put it all together. Solve the world. One conversation at a time.`
            }
        ]
    },
    {
        id: 35,
        portraitSpeaker: "ENCYCLOPEDIA",
        audio: 'src/lib/assets/audios/dialogues/encyclopedia.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Was there something... *terrifying* about her?`
            },
            {
                id: 2,
                speaker: 'ENCYCLOPEDIA',
                color: '#51c3f6',
                paragraph: `*Terrifying* is a term too emotionally charged for your semantic memory. Or what remains of it, but..`
            }
        ]
    },
    {
        id: 36,
        portraitSpeaker: "RHETORIC",
        audio: 'src/lib/assets/audios/dialogues/rhetoric.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Failure?`
            },
            {
                id: 2,
                speaker: 'RHETORIC',
                color: '#51c3f6',
                paragraph: `Yes! Abject failure. Total, irreversible defeat on all fronts! Absolutely vanquished, beaten, curb-stomped and pissed on -- until *you* came along! *You* will reverse the fortune of the workers of the world.`
            },
            {
                id: 3,
                speaker: 'RHETORIC',
                color: '#51c3f6',
                paragraph: `You alone, against every living thing, against every human alive: eight hundred trillion reál in the hands of an *impossibly* well organized ruling class; towering city blocks of bank-men who have the ears of prime ministers; million-headed armies of nations and the love of your own mother!`
            },
            {
                id: 4,
                speaker: 'RHETORIC',
                color: '#51c3f6',
                paragraph: `You -- against the atom, the charm and the spin. Where the whole world failed -- matter failed to bend to human will; human will failed to get out of bed and tie its laces -- you alone, single-handedly, will rebuild the dreams of the working class. You are The Last Communist.`
            },
            {
                id: 5,
                speaker: 'RHETORIC',
                color: '#51c3f6',
                paragraph: `Now get to work, comrade.`
            }
        ]
    },
    {
        id: 37,
        portraitSpeaker: "DRAMA",
        audio: 'src/lib/assets/audios/dialogues/drama.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'DRAMA',
                color: '#51c3f6',
                paragraph: `Slither up to her, you silver-tongued fiend. Show her what world-class perfidy looks like!`
            }
        ]
    },
    {
        id: 38,
        portraitSpeaker: "CONCEPTUALIZATION",
        audio: 'src/lib/assets/audios/dialogues/conceptualization_atoms.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'CONCEPTUALIZATION',
                color: '#51c3f6',
                paragraph: `It *must* be. This is the greatest and kindest arrangement the atoms had in them.`
            }
        ]
    },
    {
        id: 39,
        portraitSpeaker: "VISUAL CALCULUS",
        audio: 'src/lib/assets/audios/dialogues/visual_calculus.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'VISUAL CALCULUS',
                color: '#51c3f6',
                paragraph: `The man does not know the bullet has entered his brain. He never will. Death comes faster than the realization.`
            }
        ]
    },
    {
        id: 40,
        portraitSpeaker: "VOLITION",
        audio: 'src/lib/assets/audios/dialogues/volition.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'VOLITION',
                color: '#cd94d7',
                paragraph: `No. This is somewhere to be. This is all you have, but it's still something. Streets and sodium lights. The sky, the world. You're still alive.`
            }
        ]
    },
    {
        id: 40,
        portraitSpeaker: "INLAND EMPIRE",
        audio: 'src/lib/assets/audios/dialogues/inland_empire.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'INLAND EMPIRE',
                color: '#cd94d7',
                paragraph: `Why should we just leave and leave -- and the world get left behind?`
            }
        ]
    },
    {
        id: 41,
        portraitSpeaker: "EMPATHY",
        audio: 'src/lib/assets/audios/dialogues/empathy.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'EMPATHY',
                color: '#cd94d7',
                paragraph: `This is a very, very sad man who has just seen something that's made him forget his sadness.`
            }
        ]
    },
    {
        id: 42,
        portraitSpeaker: "AUTHORITY",
        audio: 'src/lib/assets/audios/dialogues/authority.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'AUTHORITY',
                color: '#cd94d7',
                paragraph: `And you? Is it an honour to work with you? Don't ask him, ask yourself.`
            }
        ]
    },
    {
        id: 43,
        portraitSpeaker: "ESPRIT DE CORPS",
        audio: 'src/lib/assets/audios/dialogues/esprit_de_corps.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'ESPRIT DE CORPS',
                color: '#cd94d7',
                paragraph: `If an assault were launched on this building right now -- if the windows came crashing down and the whole world descended upon you -- this man would hurl himself in death's way to save you. You are sure of this -- but why?`
            }
        ]
    },
    {
        id: 44,
        portraitSpeaker: "SUGGESTION",
        audio: 'src/lib/assets/audios/dialogues/suggestion.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'SUGGESTION',
                color: '#cd94d7',
                paragraph: `Brother, you should put me in front of a firing squad. I have no words for how I failed you.`
            }
        ]
    },
    {
        id: 45,
        portraitSpeaker: "ENDURANCE",
        audio: 'src/lib/assets/audios/dialogues/endurance.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Wait, why do I need to do that?`
            },
            {
                id: 2,
                speaker: 'ENDURANCE',
                color: '#ee5552',
                paragraph: `Your heart can belong to Revachol or it can belong to darkness. As long as it's torn between them it's broken and useless.`
            },
            {
                id: 3,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `What happens to me then?`
            },
            {
                id: 4,
                speaker: 'ENDURANCE',
                color: '#ee5552',
                paragraph: `You will be free to love Revachol like no one has ever loved her. You will be her champion, and she will be *faithful* to you. If you can just make this last sacrifice, you will *finally* know happiness.`
            },
            {
                id: 5,
                speaker: 'ENDURANCE',
                color: '#ee5552',
                paragraph: `So ask yourself, when the time comes, can you shoot the past in the head, walk away, and never look back on its rotting remains?`
            }
        ]
    },
    {
        id: 46,
        portraitSpeaker: "PAIN THRESHOLD",
        audio: 'src/lib/assets/audios/dialogues/pain_threshold.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'PAIN THRESHOLD',
                color: '#ee5552',
                paragraph: `Baby, you know it's going to hurt.`
            }
        ]
    },
    {
        id: 47,
        portraitSpeaker: "PHYSICAL INSTRUMENT",
        audio: 'src/lib/assets/audios/dialogues/physical_instrument.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'PHYSICAL INSTRUMENT',
                color: '#ee5552',
                paragraph: `The fuck do you need a gun for? Look at the pythons on your arms. You *are* a gun. The biggest one in the world.`
            }
        ]
    },
    {
        id: 48,
        portraitSpeaker: "ELECTROCHEMISTRY",
        audio: 'src/lib/assets/audios/dialogues/electrochemistry.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'ELECTROCHEMISTRY',
                color: '#ee5552',
                paragraph: `The word *august* used as an adjective -- that's how cool it feels to be old and cool in the eyes of the young. Let's face it, you're near death yet bathed in the golden rays of stately grandeur. Like a late summer's day. Like a Daddy-O...`
            }
        ]
    },
    {
        id: 49,
        portraitSpeaker: "HALF LIGHT",
        audio: 'src/lib/assets/audios/dialogues/half_light.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Fuck yeah, motherfuckers!`
            },
            {
                id: 2,
                speaker: 'HALF LIGHT',
                color: '#ee5552',
                paragraph: `That's the spirit!`
            },
            {
                id: 3,
                speaker: 'HALF LIGHT',
                color: '#ee5552',
                paragraph: `Never forget: The whole world's a wooden house and you're a god damn flamethrower.`
            }
        ]
    },
    {
        id: 50,
        portraitSpeaker: "HAND/EYE COORDINATION",
        audio: 'src/lib/assets/audios/dialogues/hand_eye_coordination.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'HAND/EYE COORDINATION',
                color: '#fed551',
                paragraph: `Rooty-tooty pointy shooty!`
            }
        ]
    },
    {
        id: 51,
        portraitSpeaker: "PERCEPTION",
        audio: 'src/lib/assets/audios/dialogues/perception.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'PERCEPTION',
                color: '#fed551',
                paragraph: `A slogan used to intertwine with the loops a long time ago. Now only a shadow of peeled letters remains. It says: 'Tomorrow is just a whisper away'.`
            }
        ]
    },
    {
        id: 52,
        portraitSpeaker: "REACTION SPEED",
        audio: 'src/lib/assets/audios/dialogues/reaction_speed.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'REACTION SPEED',
                color: '#fed551',
                paragraph: `You leap left. A swarm of angry lead passes mere millimetres from your side, tearing fabric off your coat. Feels like the lightest of tucks.`
            }
        ]
    },
    {
        id: 53,
        portraitSpeaker: "SAVOIR FAIRE",
        audio: 'src/lib/assets/audios/dialogues/savoir_faire.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `The system is broken!`
            },
            {
                id: 2,
                speaker: 'SAVOIR FAIRE',
                color: '#fed551',
                paragraph: `Boohoo, *the system is broken*. *The establishment is keeping me down...* That's not the fuck-yeah attitude you're used to, what is this? Why are you so poor?`
            }
        ]
    },
    {
        id: 54,
        portraitSpeaker: "INTERFACING",
        audio: 'src/lib/assets/audios/dialogues/interfacing.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Sounds like a plan. (Accept.)`
            },
            {
                id: 2,
                speaker: 'INTERFACING',
                color: '#fed551',
                paragraph: `The anticipation makes you crack your fingers. Feels nice. Nice and *cracky*.`
            }
        ]
    },
    {
        id: 55,
        portraitSpeaker: "COMPOSURE",
        audio: 'src/lib/assets/audios/dialogues/composure.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'YOU',
                color: '#af4e33',
                paragraph: `Definitely not sweating, no sir. (Wipe the sweat away.)`
            },
            {
                id: 2,
                speaker: 'COMPOSURE',
                color: '#fed551',
                paragraph: `Excellent work, now there's a glistening smear across your bare chest. Everyone will be able to see the evidence of your overactive sweat glands.`
            }
        ]
    },
    {
        id: 56,
        portraitSpeaker: "JOYCE MESSIER",
        audio: 'src/lib/assets/audios/dialogues/apres.mp3',
        dialog: [
            {
                id: 1,
                speaker: 'JOYCE MESSIER',
                color: '#ffff',
                paragraph: `"'*Après la vie, la mort*,' they summarized it for the queen and Dolores Dei; '*Après la mort, la vie encore! Après le monde, le gris. Après le gris, le monde encore!*'"`
            },
            {
                id: 2,
                speaker: 'INLAND EMPIRE',
                color: '#cd94d7',
                paragraph: `After life, death. After death, life again. After the isola, the pale. After the pale, isola again.`
            }
        ]
    }
]
