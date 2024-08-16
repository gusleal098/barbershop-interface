import styled from "styled-components";

export const Container = styled.div `
    background-color: #ffffff;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
        background: transparent;
        border: none;
        text-decoration: underline;
    }

    .container-top {
        display: grid;
        grid-gap: 10px 130px;
        grid-template-areas: 
            'title title'
            'date date-schedule'
            'time time-schedule';

        .title {
            grid-area: title;
            margin-bottom: 20px;
            font-weight: bold;
        }
        
        .date {
            grid-area: date;
        }

        .date-schedule {
            grid-area: date-schedule;
        }

        .time {
            grid-area: time;
        }

        .time-schedule {
            grid-area: time-schedule;
        }
    }

    .container-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 24px;
        margin-top: 50px;
    }

    .message {
        padding: 20px;
        text-align: center;
    }

`

