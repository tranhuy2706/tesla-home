import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Item.css"

const Item = ({title, desc, descLink, backgroundImage, leftBtnText,leftBtnLink,rightBtnText, rightBtnLink, twoButton,first  }) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImage})`
        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>{title}</p>
                    <div className="item_textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item_buttons">
                        <Button imp='primary' text = {leftBtnText} link={leftBtnLink}/>
                        {
                            twoButton && (
                                <Button imp='secondary' text = {rightBtnText} link={rightBtnLink} />
                            )
                        }
                    </div>

                    {/* {first && (
                        <div className="item_expand">
                            <ExpandMoreIcon />
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default Item
