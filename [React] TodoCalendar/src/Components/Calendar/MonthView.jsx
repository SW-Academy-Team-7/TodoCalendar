import { useState } from "react";
import moment from "moment";
import TodoList from "../Todo/TodoListPage";

import {
    year,
    month,
    prevMonth,
    nextMonth
} from "../../Util/manageCalendar";
import {
    HeaderContainer,
    Button,
    CurrentMY,
    CalendarWrapper,
    WeekdayWrapper,
    DayWrapper,
    TopDiv,
    BottomDiv,
    WholeCalendar
} from "./TodayTodoListStyle";

function TodayTodoList({ setIsLogin }) {
    const [dateObject, setDateObject] = useState(moment());

    const daysInWeek = moment.weekdaysShort();

    const daysInMonthArr = () => {
        const startOfMonth = moment(dateObject).startOf("month").format("d");
        const daysInMonthArray = [];

        for (let i = 0; i < startOfMonth; i++) {
            daysInMonthArray.push(<DayWrapper key={`empty${i}`} />);
        }

        for (let d = 1; d <= moment(dateObject).daysInMonth(); d++) {
            daysInMonthArray.push(
                <DayWrapper key={`day${d}`}>
                    <TopDiv>{d}</TopDiv>
                    <BottomDiv>
                        {/* <TodoList
                            moment={{
                                year: year(dateObject),
                                month: month(dateObject),
                                day: d,
                            }}
                        /> */}
                    </BottomDiv>
                </DayWrapper>
            );
        }

        return daysInMonthArray;
    };

    return (
        <WholeCalendar>
            <HeaderContainer>
                <Button className="LeftButton" onClick={() => setDateObject(prevMonth(dateObject))}></Button>
                <CurrentMY>{dateObject.format("Y년 M월")}</CurrentMY>
                <Button className="RightButton" onClick={() => setDateObject(nextMonth(dateObject))}>

                </Button>
                {/* <Button onClick={() => setDateObject(moment())}>이번 달</Button> */}
            </HeaderContainer>

            <CalendarWrapper>
                {daysInWeek.map((day) => (
                    <WeekdayWrapper key={day}>{day}</WeekdayWrapper>
                ))}
                {daysInMonthArr()}
            </CalendarWrapper>
        </WholeCalendar>
    );
}

export default TodayTodoList;
