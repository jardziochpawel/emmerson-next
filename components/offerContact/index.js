import {
    ButtonSubmit,
    ContactData,
    Container,
    Form,
    IconAgent,
    Label,
    Mail,
    Input,
    Name,
    Number,
    TextAreaInput, InputGroup, ButtonGroup, ContactDataHeader
} from "./styles/offerContact";

export default function OfferContact({children, ...restProps}){

    return(<Container {...restProps}>{children}</Container>)
}

OfferContact.IconAgent = function OfferContactIconAgent({ ...restProps }){

    return(<IconAgent {...restProps} />)
}

OfferContact.Name = function OfferContactName({children, ...restProps}){

    return(<Name {...restProps}>{children}</Name>)
}

OfferContact.ContactDataHeader = function OfferContactData({children, ...restProps}){

    return(<ContactDataHeader {...restProps}>{children}</ContactDataHeader>)
}

OfferContact.ContactData = function OfferContactData({children, ...restProps}){

    return(<ContactData {...restProps}>{children}</ContactData>)
}

OfferContact.Number = function OfferContactNumber({children, ...restProps}){

    return(
        <Number {...restProps}>{children}</Number>
    )
}

OfferContact.Mail = function OfferContactMail({children, ...restProps}){

    return(
        <Mail {...restProps} >{children}</Mail>
    )
}

OfferContact.Form = function OfferContactForm({children, ...restProps}){

    return(<Form {...restProps}>{children}</Form>)
}

OfferContact.TextInput = function OfferContactTextInput({children, name, ...restProps }){

    return(
        <InputGroup className='form__group field'>
            <TextAreaInput id={name} className='form__field' placeholder={children} {...restProps} />
            <Label htmlFor={name} className='form__label'>{children}</Label>
        </InputGroup>
    )
}

OfferContact.Input = function OfferContactInput({children, name, ...restProps }){

    return(
        <InputGroup className='form__group field'>
            <Input id={name} placeholder={children} className='form__field' {...restProps} />
            <Label htmlFor={name} className='form__label'>{children}</Label>
        </InputGroup>
    )
}

OfferContact.ButtonSubmit = function OfferContactButtonSubmit({children, ...restProps}){

    return(
        <>
            <ButtonGroup className='btn-container'>
                <ButtonSubmit {...restProps}>
                    <span className="text">{children}</span>
                    <div className="icon-container">
                        <div className="icon icon--left">
                            <svg>
                                <use xlinkHref="#arrow-right" />
                            </svg>
                        </div>
                        <div className="icon icon--right">
                            <svg>
                                <use xlinkHref="#arrow-right" />
                            </svg>
                        </div>
                    </div>
                </ButtonSubmit>
            </ButtonGroup>
            <svg style={{display: 'none'}}>
                <symbol id="arrow-right" viewBox="0 0 20 10">
                    <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
                </symbol>
            </svg>
        </>
    )
}