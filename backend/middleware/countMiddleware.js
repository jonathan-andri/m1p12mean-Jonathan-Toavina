const Appointment = require('../models/Appointment');

countStatsMiddleware = async (req, res, next) => {
    try {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        
        const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        
        const monthBefore = lastMonth === 0 ? 11 : lastMonth - 1;
        const monthBeforeYear = lastMonth === 0 ? lastMonthYear - 1 : lastMonthYear;
        const lastMonthStart = new Date(lastMonthYear, lastMonth, 1);
        const lastMonthEnd = new Date(lastMonthYear, lastMonth + 1, 0);
    
        const lastMonthCount = await Appointment.countDocuments({
        appoStatus: 'Confirmed',
        appoDate: { $gte: lastMonthStart, $lte: lastMonthEnd }
        });
        console.log(lastMonthCount)
        
        const monthBeforeStart = new Date(monthBeforeYear, monthBefore, 1);
        const monthBeforeEnd = new Date(monthBeforeYear, monthBefore + 1, 0);
        
        const monthBeforeCount = await Appointment.countDocuments({
        appoStatus: 'Confirmed',
        appoDate: { $gte: monthBeforeStart, $lte: monthBeforeEnd }
        });
        console.log(monthBeforeCount)

        let percentageDifference = 0;
        if (monthBeforeCount > 0) {
        percentageDifference = ((lastMonthCount - monthBeforeCount) / monthBeforeCount) * 100;
        } else if (lastMonthCount > 0) {
        percentageDifference = 100; 
        }

        console.log(percentageDifference, "tay")

        res.locals.appointmentStats = {
            lastMonthCount,
            monthBeforeCount,
            percentageDifference: Math.round(percentageDifference * 100) / 100 //
        };
        
        next();
        } catch (error) {
        console.error('Appointment stats middleware error:', error);
        next();
        }
  };

module.exports = countStatsMiddleware;
