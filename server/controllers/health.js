const getApiHealth = async (req, res) => {
    res.json({
      success: true,
      message: " All Good✅",
    });
}

export { getApiHealth };