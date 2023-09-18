import React from "react";
import Event from "./Event";
const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Starbucks ☕️' color='green' />
                        <Event event='Starbucks ☕️' color='green' />
                        <td></td>
                        <td></td>
                        <Event event='Starbucks ☕️' color='brown' />
                        <td></td>
                        <Event event='Waffle house 🥮' color='green' />
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <Event event='boat cruise ' color='blue' />
                        <td></td>
                        <Event event='Subway 🚊' color='pink' />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color='blue' />
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <Event event='Museum' color='grey' />
                        <td></td>
                        <td></td>
                        <Event event='Aquairum' color='blue' />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <Event event='Boat Cruise 🚢' color='blue' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Champaign🍾' color='red' />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='pizza hut 🍕' color='yellow' />
                        <td></td>
                        <td></td>
                        <Event event='Sky dive 🛩️ ' color='blue' />
                        <td></td>
                        <Event event='Beer 🍺' color='blue' />
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Skating park 🛹' color='blue' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Resturant 🍽️' color='red' />
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <Event event='Yolk 🍳' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Shopping' color='green' />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color='pink' />
                        <Event event='Packing' color='blue' />
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color='green' /><td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Calendar;