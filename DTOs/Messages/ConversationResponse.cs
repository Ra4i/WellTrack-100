namespace WellTrackAPI.DTOs.Messages;

public class ConversationResponse
{
    public List<ConversationMessageDto> Messages { get; set; } = new();
    public int Page { get; set; }
    public int Limit { get; set; }
    public int Total { get; set; }
    public bool HasMore { get; set; }
}
