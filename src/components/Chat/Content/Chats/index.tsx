import React from 'react';

import Author from 'components/Author';
import Container from './styles';
import Chat from './Chat';

const Chats: React.FC = () => (
    <Container>
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C5603AQGT3ma6_zxgrA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=IhrMDUt3pMsNIc6Ja_SF2p303T9OKfuGv8Ss8Xv6UTI"
            name="Ada Lovelace"
            date="27 de jun de"
            message="Ada: Obrigado, Christy."
        />
        <Chat
            online={<Author small image="https://media-exp1.licdn.com/dms/image/C4D03AQEak4btMtChUw/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=Ji5ScebSvaZ5OLiN_-dHi2BiSnmNHSxnYl99cRs9dPM" />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! U..."
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C4D35AQFz4CBrCa45OQ/profile-framedphoto-shrink_100_100/0?e=1593900000&v=beta&t=K28W2ChWBYxSLcothXv_29g-GQKE-Sd0Ar1MBFTcsM4"
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito o..."
        />
        <Chat
            online={<Author small image="https://media-exp1.licdn.com/dms/image/C4D03AQHtRfvSX-G6Xg/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=rplsQ2yVWJDtYqQ2PfrRDHWQhhpo3Mbu8k5UfZIo22A" />}
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            online={<Author small image="https://media-exp1.licdn.com/dms/image/C4D03AQGggr_gCxMONQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=PzCm6120KhrlfP9VSpojD3ohJ6O-1pxWkNw_H3Qf-lw" />}
            name="Ada Lovelace"
            date="27 de jun de"
            message="Ada: Obrigado, Christy."
        />
        <Chat
            online={<Author small image="https://media-exp1.licdn.com/dms/image/C4D03AQHbCCQKcuaq_A/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=9qCdJMFhDo2nX_vQPQuhCnVk-QNqzW1zsmvsZqTNXMs" />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! U..."
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C4D03AQF_Ztf3jq9YzA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=sCl69LkdB1sd3UWctkv8c-DhliGI2XnpY1mVtlAKD4w"
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrig..."
        />
        <Chat
            online={<Author small image="https://media-exp1.licdn.com/dms/image/C4E03AQFO_VLimb4ldA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=9FPUDEUr7KHA-hvLzLkMV2WfjnzC97sKXVWOwY3ZfFM" />}
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C4D35AQFz4CBrCa45OQ/profile-framedphoto-shrink_100_100/0?e=1593900000&v=beta&t=K28W2ChWBYxSLcothXv_29g-GQKE-Sd0Ar1MBFTcsM4"
            name="Ada Lovelace"
            date="27 de jun de"
            message="Ada: Obrigado, Christy."
        />
        <Chat
            online={<Author small image="https://media-exp1.licdn.com/dms/image/C4D03AQGihX3THDKX3w/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=omGEviXYYq2fWhPP6SJF9-aCv54Y39iitBpKCaPQB6A" />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! U..."
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C4D03AQF_Ztf3jq9YzA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=sCl69LkdB1sd3UWctkv8c-DhliGI2XnpY1mVtlAKD4w"
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrig..."
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C5603AQE7v6NYeluqsg/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=10yV9xKVifgbMrlOZhsVGsOfLupgGkUeBONJ5S0H_yM"
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C5603AQG53lCbcEzrdQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=f80HCxYcTC6EebpYqJumU7F5BijmdMpit5opbEHXTJc"
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! U..."
        />
        <Chat
            online={<Author small image="https://media-exp1.licdn.com/dms/image/C4D03AQH6ab6Tw3Gv9w/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=agt1_A-fVVKNE6XJQzslh5xBU5wrXHuTklRkADnf7Bs" />}
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrig..."
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C4D35AQFz4CBrCa45OQ/profile-framedphoto-shrink_100_100/0?e=1593900000&v=beta&t=K28W2ChWBYxSLcothXv_29g-GQKE-Sd0Ar1MBFTcsM4"
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            online={<Author small image="https://media-exp1.licdn.com/dms/image/C4D03AQH2sNibhgySAw/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=Zs20HxyFGpSfZnvA0JA8u4PpTEsUpdJowbJd6kmaOMg" />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! U..."
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C4D03AQF_Ztf3jq9YzA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=sCl69LkdB1sd3UWctkv8c-DhliGI2XnpY1mVtlAKD4w"
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrig..."
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C5603AQG53lCbcEzrdQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=f80HCxYcTC6EebpYqJumU7F5BijmdMpit5opbEHXTJc"
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
        <Chat
            online={<Author small image="https://media-exp1.licdn.com/dms/image/C4D03AQFwF3VAKNaeHQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=Yn9-AjDyUz0NRvEvxNRYMp9jzGIOY4dNUiT_crq3BGA" />}
            name="Alan Turing"
            date="26 de jun de"
            message="Você: Boa noite, Alan! U..."
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C4D35AQEu4iKxHAurSg/profile-framedphoto-shrink_100_100/0?e=1593910800&v=beta&t=vVk9YF00jB2dsVDedCXyFUODG7Qru5Zjs9aVNN6xXsk"
            name="Sherlock Holme..."
            date="25 de jun de"
            message="Você: Show! Muito obrig..."
        />
        <Chat
            image="https://media-exp1.licdn.com/dms/image/C4D03AQGe-iXN_QLyuQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=YRyHqjsdH942hIenCuq889yCfBPwKpWQJNGnALZ0gGc"
            name="Bilbo Bolseiro"
            date="25 de jun de"
            message="Bilbo: Muito obrigado!"
        />
    </Container>
);

export default Chats;
