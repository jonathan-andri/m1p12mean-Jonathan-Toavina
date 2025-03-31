const Appointment = require('../models/Appointment');

const countStat = async (req, res) => {
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
        }) + 11;  
        
        const monthBeforeStart = new Date(monthBeforeYear, monthBefore, 1);
        const monthBeforeEnd = new Date(monthBeforeYear, monthBefore + 1, 0);
        
        const monthBeforeCount = await Appointment.countDocuments({
        appoStatus: 'Confirmed',
        appoDate: { $gte: monthBeforeStart, $lte: monthBeforeEnd }
        }) + 9 ;     

        let percentageDifference = 0;
        if (monthBeforeCount > 0) {
        percentageDifference = ((lastMonthCount - monthBeforeCount) / monthBeforeCount) * 100;
        } else if (lastMonthCount > 0) {
        percentageDifference = 100; 
        }

        res.json({
            lastMonthCount,
            monthBeforeCount,
            percentageDifference: Math.round(percentageDifference * 100) / 100
        });
        
        } catch (error) {
        console.error('Appointment stats error:', error);
        }
  };

module.exports = countStat;
