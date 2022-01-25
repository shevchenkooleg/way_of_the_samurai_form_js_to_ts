let avaLinkArray = [
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIREhERERERERERERERDxERGBgZGRgUGBgcIS4lHB4tHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhISQxMTExMTExNDExNDQxNDQxNDQ0MTE0NT80NDQ0MTQ0PzQ0PzQxPzQ/PzE0MTExMTExMf/AABEIAQ8AugMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQUGAwQHAgj/xABFEAACAQMBBAYHBQQGCwAAAAABAgADBBEhBQYSMRNBUWFxkQciMlKBobEjQmLB0RRyguEzU4OS8PEVFiQlNENUY6PC0v/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEAAgIDAAIDAQEAAAAAAAABAhEDIRIxQTJhIkJRBBP/2gAMAwEAAhEDEQA/AOzQhCAoRwgEIRQHFCeKjhRk/wAyeyB7hI25uiBqcfhHV4mRNXaBB0c/LEJ1VoEJBWW2MkK+ATyP3T+hk2jAjIhD3CKEAjihAcIp5ZgNTpA9QzNU1SdfZXq949/cJhNygPOVuUi0xtSGYTXpsD7Jx9JmU9vOTLtFmnqOKElBxQhAI4o4BFHFAJqVzlj2IM/Ezbmqw9dx2qp/KExXdpVjkiQ1UmS1/TIcyNqpMtumSaagqkc+UtW7+0S32bH1lGh95e3xEqdVZl2bdGnUVvdOvep0ImmN30yzx+ukiOYLd+JQf8d0zyWRRxQgE1K78TcP3V1bvPUJsVXCqWPIAmRV1VKJr7TesfEyuV1NrYY+V01b+7JJUHxmmrGeAMmZkWc1u3bjjJNNqzrEEaycQ6AyApJqJPUxhQPCa8bDmkZo4oTZziEcUBwhFAcUI4BNS59Vkbq9lvjy+c25iq0wylTyIxAhtsUOTD4yDqJLOy9IjI3tp6rfkw7iNZAVqeCR2TPKarp48t46RNZJpEYaStdJG1VwZONMp0vG7txx0lHWBg/DT6SalU3Wq6le8HzH8pappfbmOKOKQNS+OQqe+wH8I9ZvkPnIbab5aS1wc1APcRm+LHA+QaQdy2XMx5L8b8E728Kszqsxos2FWZOps2FPLZ7JK9Y7tZr2lPgXJ5mbKDzOpnRhNRxcuXlk94hiOEuzKEDPDVVHNgPEgSLTT3CarX1Ic6iDxdf1mF9r2451U+DZ+kjyxn1aY5X4kISMO27f38+CsfymF94KA98+CNK3lwn1M4s78TEJXq29VFfu1D/Dietl70Ubip0QV0YgleIDDY5yMebC3Uq2XDnjN2JO6QqRUUaqMOPeT9RI/aVuCA68j2fWTmJoFAh6M+w+Snd2rNLNxXDLVViukirlJY7+1KE9h5SEuqcpOnRbLNt/d58OO8fQgy6yk7HQhl+I8wZcqLZVT2qD8prXLfbJCEJCEeTlqzdhVPJc/wDtIRtWPjJeieKnUYfeeofnj8pF8BzMOT26eH1XtBN2yocRyeQmChSLEASWppwgKOf+NYwx32ty56moyAZPcPrMsSjAxHN3IcUIQKn6RLmpTsy9NmUB1DlSQQh7x1Tk1PbfvOT4sTO/3FBKiMjqGVgQykZBHZOAb3bDp2t5VpquEDBkHYjDIE5+bH66eDL5Ela7Yp9ZElrbb1Hu8pULK1p6aCWGwt6enqjynn8mo9DDdTP+s1MclJ8BMNTebPKm/wDdM27a3p49kR3NNANAJhbP8bTH9q7ebcds/Zv5Sa9HllWuLj9qYcFKjxKufadyMYA7AJD7QqLrynQvR7Q4bFGI/pGep4gnT6Tr/wCTGZZb05f+zK4462tQmKvSDqVPwI5g9REywnqPKRrp0gKPgOvPv7GHdIuvs0A6mSe2aR6M1EYJUpAsrE4UjrVu4yqPtupUwFHrHmeoS2OO+0+Vk1ExR4KbAkgBczNabfpKgUh2Zcr6q5BAOhB5cpB0LNqhzUJbu6vKSlGxA6pbLGIbh3kT+qq/+P8A+oHeOlgkrUU4OAydfiDPCWGeqD7OHZM70mNrYzKaSjKnQk4OdTrM9SzUyv1tnMh4qZZG7VOM+MzW23KierWXiHLjUYPxEpdX2tLZ6T1OkEH+NZnQdfWZp2NUVftAQVBIUDq7Se+b8mRW229iOKEsg4RQgE5n6Wtjkol4gzwfZ1sdSnVXPgdPiJ02YLm3SojI6hkdSrKdQQeYlcsfKaWxy8bt83Wl1g85OWd3y1mffL0fXNq7VrRHr2+p4EBatTHYV5sO8SmUtplDwsCrDQqQQR4gzi5OC13cfPI6RbbQHbPN9eDHOUqhtfvkhYUru9fgtqT1DnDPgimneznQTCcFt02vPJ22VD3NWnQpgl6jhBjqB5se4DWdy2daLRpU6S+zTRUHfgc5W9y9z0sQatQipdOMM49lF9xM/XrluE7+Hi8I4Ofl88jhHI7bd50NvUqD2gpCfvnQfMzdgqm9O1zVqG3pn7NDioR99+zwEWzrQaaSF2cmWydSTkntMtlgnKdGvGDftraSFK3E8W6zdEyyqHkII+ET1CUS16tuD1SLurEHOknJiqLmUyi2NVm1ZrepxD2G0derHb4y0qwIBGoIyJEX1AEGZdh1iaZQ80bHwOok40yiUhCEsqcUcUAhHCApUt/d20u7VylJGuEw9NuEB24eaZ5nIzLdEZFm5pMurt8+WbUQOj6PFTPBwcB4+Plw455nZt0Nmm2tKVNl4XwzOo6mYk4PgCBOfbZxT2q74A4bq3qfDiXM66JhxYSZWtuXkuWMmjhCE6GAlY34q4oonv1MnwUfzlnlO37qa0V7A7fT9JbH2RA7MpOzYRSx7uqWJDUpDLoQvaNRNC2v0tLOpWC8TpSL4958aA905/bb9X4rB3rcYJBqUGRRRNMnVV7DjrjPlsrfDhuUtjtVhXDgESRErGxKn2rqueDAcDs4hnEswkb32xs1dPUUcREhDFVqhRkyP/0izEhELY6+Q8543iqlKYI62Cn4zmG2/SNWtqxpW1OlwUzwlqoZmqN14wdBK39tMMbl6dNrXZ5VEZM8jzXznjY74ruvvJn4g/zmtu7t1No2a1+HgJ4kqITxcFReYB6xyIPYZj2XVxcU+/iTPaMHH0ErOqWdLXHFCaMxCEcAhCKA4jCEDj2+/q39yfw038hn8p1y3fiRG95VbzGZyrf5P94VB71BD8iJ0fd6rx2ls3PNClnx4QDMsfyrTL8Yk44o5qzKc09Ku0TQamwGW4NAeXPWdLnKPTCmXofuMfnJl0mIzZO8FOrTKnBUrwOhOuOyFHZloHVwHYggqhxgnqB6yJzAOyOxUlTxHl4yzbr3NxXqMisoKJx5ZeeoGNPGVuPlWuPJljLqu47u25VS7Y431Pd2CWETklteXtPmhYDrpv8AkZvne16K8VbpKa6DicELnxk3c+KamX102E5um/8Ab/8AUL5ibFtvktYlaLNUYcxTHERKeX6W/wDP9rfti16Wk6ciRlT2MNQZxTbm7/HWbJWm/ESyuM+t1suoyJ0U314/s0n/AI2CiVDfdbmjTSo608u/ByLFdM5kb38Ww/j6re2VtCjs6z6IPgAvUd2IBZ25kD4AfCPdHbbXVfjxhFqIEHXjI1PnOWXju+rsW7uSjwE6N6Nbb1UPvVEEnWjLd9uyCOIQl2BxQhAIQhAIQhA5V6Q0xfg+9br8iZddx6nFYW/4VdD/AAuwlR9JS4vKB96gw8mli9HFTNmV9ytVXzIb85jj+daX8YtsIQmzMpzf0tW2VoP1YqJ8dDOkGVT0iWfSWZbGtJ1b+E+qfqJMTHznWTDv4mS+6211tK5qOpKOnA+OY1yDNTaNuVqsO3UTTKESN6X8dx2fZm8ljUA+3pqexyEI85XPSXtm3qUadvQdKjFw7lCGVQOQJHfOd4iMtbtEx0x9HmXL0bbUp2l2DWIWnUHCzH2VPUTKojDrm9b8J5ETO1pjjt9DVd5Nn0xxG5oY56OrHyE5z6Qd66N4tOjQBKI/GzsOEE4wAJR9BMbNI0tMJO3muuhnXvR7ZcNOh4l/IfricppUS7U0951HzneN1LXgUfgQL8TqfoIvyGXUtWUQgI5dzFCOKAQjigOKOKBzb0nrivaN2rUXyIkj6Mn+yuU92sD/AHl/lNT0qL/wbfjqL8hH6Mqnr3SdoRvqJj/dr/R0KOKObMimptK1FajUpHlURl8CRofObcDA+e95tmFQlTGCCUfuPIjzErlWkJ1zfmwCtVTHq1gaifvfeHnr8Zy9LWpUPCqNkHByMAfGVu3ThqxEVExMJq8IzjMttvsSkMGvUz+Cn+smrNrSnjo7ZCR9514z843pW625yl639UD34aZaFzxN7PDOq09sYGlGljs6Nf0g9zbVdKtpSOetUCt5iVuS2Mv+ubF4JqRLvebqWtUE29Q0m9x/WT9RK7dbEr25JqUyVHJ0yyH4jlEyi+khupZ9JdJ7qDiPjO47IpcNMHrYlvh1TmG4NiQAzAh6zgAEahf8p1ymoAAHIAAScfbLly+PYhHFLsBCOKA4RRwFAmEx1/ZbHut9IFG9IyCt+yU+NKea2eN86KRjOkzbq7DqWVepUd0qUqlIKrpnmDnUSvekxi1O0cHQ8K6dRxDdDeKtTYUKjcSEDhJ547DM7ry/bTV8XTaO0KTnCuM9h0Pzm2DI0WtOoobAORPKWtRP6NyB7r+sv8pozSkJHNcV1501b91iJgqbYdPat3x+FlaBDekS1LUEqL7VN8Z7mH+U5PdVamfaI7QJ1vb22qNa2q0ytRHKgor0zqwOmCMic72la6Z4CDjsmmM3E+V0jrRFOp1k1a0000Eg7QMDggybts6SuURLUrSpL2CZ1oL7omrRebyazKryvBtU7MeEwXFTowfWOOw6ib602OgBm5bbANT1mHnK6i3lYx7k0Xesaj+yiHgGMDXTP1l9Ehdi2y0ndORIUjwHOTUvPSmV3TijillRCOKA4oCOAREQhA5D6QKnAnQPo1KuHp96NqCPOVzp+B6TjqInYt69gU7u3rDo0a46JhRdgOJX5qAerUDznI9mbCu7xuhSm1N6YJc1ldERh90nHOZZT+UrSZfxsdB3c22GwC0tz3S8OR2TjFbYO17M8X7M7qv3qDCquPAet8pt22/TKvR1qdSmw0PGjD6ze2MnWLe9VhqZsAqeycgo74qT6r/OTFnvb+L5xRfL23pkZIGfASHq2CPpgTQpbdFTrkha18zTGag1Ru5TY54R5Tdpbr0sagSWoCbZIHMymVJEOm7dAdRmzT2NRXkvzm8HXtEY15TLpfuMKWdNeSCbAWGJ4qVAozIskR3WvdUDkOmjrqO/tE2bauHUMNOojsPZMdvcB8zCfs6gP3H0PYG6jEqbEhCAMJdUQhCARwhAUIQgEMRxQDEwVram/t00fPvKrfWbEUCpbZ9H+z7nJ6LoXP8AzKPqHPeORlG2t6Mryhl7WqK6DXo29Spj6GdmgYHFdkW9SmBx5DcmB5g9YMuWzHziQt4wapUYdbuR4FjJTZj4xOnXQspuAi5mm1wznOZoXFzxNjqEz0TOTky3XRx46byGZlqEcjNZGmTMwtb6lStCvxDvmHaCkqcTRp1eEiSVQ8Sy0y25s8PG9Kvutfvx1KdTR1dhjuzp8pa61MOhB65TNtIaNQV05aLUA6x1GWbY96KqAjXSaVm3LOqWXDe0ujd/fNmaL+pUU9T+qfym9Jxu0UQhCWQcIQgKOEIBEY4QFCOEBTBePw06je6jnyBmeaO2ji3rH/tv9JM9jmrmSFpV4VkTVee0uMLOjK6h9S1Ctk5kjSeVu1uO+SlGvOLJ14VNJUmXpJFpXmUV5lWsrbepJS0q8SSumtJXZ1X1TIx9s+T0w7Wph0dTqCpE8bkn7Mj3SR5T3fVOcx7mODTqY6ncfOb4uWpzaRwFPY6/WSAmltFc0yezB8pto2QD2gSYivUI4pZAhCEAjhCAQhFmARxQgE1r+nx0qi+9TcfHBmzERA43cPNMV9MTc2/SNKrVTqV3A8MnHylca7wcGb5XcRfaYt7jBkpQupVhcDmDNmled85so6MMlsS6noXXfK4l53zOl13zKxrMlgWvmTdi+E8ZVbOpk5MmEuxyEY4s88t9N2/rYRj2A+cldhWy2tspfAJHGxOmp1Mqu1XY0mxocZB7+qWU7Ge7tBTunyXprg0+JOE4yGI6z8prixqad1qUyVIIZTgjlHYvxU0Pdg+I0kFuo7olS0qn7S3PD3Mh9lh3ESa2b7B7nfHnGtVDchmEJZBxRwgEWY4QCEIQFCEIDihCBzHfq14bljjR1V/jjB+kq7bGFTkNZ0Hf6iD0LdeHX4aSF2XRwRmbf1RVCv8AY9enqFJHhIk3jocOCD3zv67OSomoB0lU3j3YolWY0x4gTDKrSVze3v1PNpIUb0dWpkxsv0dJXtKt10jq69IadMAcLBO3xwZi3S2XT4sMOI55mPHafKtvZdCrUIwCBLlYbG4AC+pkzsuypqowom7VTSUvSZ2q97bcb06YHtuo+GdZdlGBjsGJXqFD/aqZPVxEeODLHiWiK5pvVf19n7S/aujd7esiK5UEjTQjTrHOXrYlwKtFaqghahLrxAg4J7DN5kDaEAjsIBE9gSyNiEcUIOKOEBQhHAIo4QFHFCA4oQgQO82xXukToqi03QkgupZSD241lYG6m019mtaH4VROiwk+V9CiUtk7aXTpbTH9p+k9vsLalUcNSvaqp58KVGOO6XiErpO0dsrZi29utAEsApDMdCxb2j3c5R624V5TqFra6pBM+qKiPxY6gcaTpMJaXSFDobI20mnTWjD+0H5SQo2m1h7TWfnV/SWyErZKnaE2ds+4FQVK70iVBCrSV8ZPWS0m4QiTSBCOKSCEcUD/2Q==',
    'https://media.istockphoto.com/vectors/cute-dogicon-vector-id477760047?b=1&k=20&m=477760047&s=612x612&h=1GD_lAkaHvZdM5qmsG2R9foLI2b-z6eelZ76C3CA-2s=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0cYTihODeLNTSImny5ABxWFHWZZ2D6PxD6JjdH8lCvLty9NQ__uQblYqMsRw8V-SWpt8&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_wa6qf5OF8Y4NtTD65OnS7318PVCI0SkKSqFDKA9PiK0qMwxJNh4HMO79tnNs3YgwaU&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VnnlmBo1vW3U7EUjVtwIul7FSbbjGomHJ-bQx4mqtOhZX_3fn1rvGHuQolZ_1MOUozo&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReg_F1DaALJ6YrWo_QI0Uh3t7ZtXXCTwCMED__q3IoW9WcCrtsmOenkqBS54131SqIDmE&usqp=CAU',
    'https://spng.pngfind.com/pngs/s/521-5217216_male-icons-free-and-clipart-avatar-hd-png.png'
]

let state = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi, how are you doing?', likeCount: 15},
            {id: 1, post: 'This is my first post', likeCount: 20}
        ]
    },
    dialogsPage: {
        dialogs: [
            {
                id: 1,
                name: 'Valentina',
                avaLink: avaLinkArray[1]
            },
            {
                id: 2,
                name: 'Ilya',
                avaLink: avaLinkArray[2]
            },
            {
                id: 3,
                name: 'Elena',
                avaLink: avaLinkArray[3]
            },
            {
                id: 4,
                name: 'Sergey',
                avaLink: avaLinkArray[4]
            },
            {
                id: 5,
                name: 'Vitaliy',
                avaLink: avaLinkArray[5]
            },
            {
                id: 6,
                name: 'Alexandr',
                avaLink: avaLinkArray[6]
            }
        ],
        messages: [
            {id: 1, message: 'Hi, how are you doing?', avatarImage: avaLinkArray[1]},
            {id: 0, message: 'Hi!)', avatarImage: avaLinkArray[0]},
            {id: 1, message: 'Whats the news?', avatarImage: avaLinkArray[1]},
            {id: 0, message: 'Oh. Everything great! I am already done my couse project by the biology)', avatarImage: avaLinkArray[0]},
            {id: 1, message: 'Sound great! Perhaps now you\'ll got much more free time to spend with me)', avatarImage: avaLinkArray[1]},
            {id: 0, message: 'Yeah! Let\'s go to the ocean tonight?', avatarImage: avaLinkArray[0]},
            {id: 0, message: ':Smile:', avatarImage: avaLinkArray[0]},
            {id: 1, message: ')))', avatarImage: avaLinkArray[1]},
        ]
    },
    sideBar: {
        onlineStatus: [
            {id: 1, name: 'Valentina', avaLink: avaLinkArray[1], isOnline: true},
            {id: 2, name: 'Ilya', avaLink: avaLinkArray[2], isOnline: true},
            {id: 3, name: 'Elena', avaLink: avaLinkArray[3], isOnline: true},
            {id: 4, name: 'Sergey', avaLink: avaLinkArray[4], isOnline: false},
            {id: 5, name: 'Vitaliy', avaLink: avaLinkArray[5], isOnline: false},
            {id: 6, name: 'Alexandr', avaLink: avaLinkArray[6], isOnline: true}
        ]
    }
}


export default state;
